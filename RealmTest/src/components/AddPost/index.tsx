import React, { useEffect } from 'react';
import { useCreatePost, PostInput } from '../../services/mutations/post';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, InputView, Input, AddButton, AddText } from './styles';
import getRealm from '../../services/realm';

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
});

const AddPost: React.FC = () => {
  const [createPost, { data, loading, error }] = useCreatePost();

  function handleCreatePost(post: PostInput) {
    createPost({
      variables: { post },
    });
  }

  useEffect(() => {
    async function savePost() {
      if (data) {
        const { id, title, description } = data.createPost;

        const post = {
          id,
          title,
          description,
        };
        const realm = await getRealm();

        realm.write(() => {
          realm.create('Post', post);
        });
        console.log(data);
      }
    }

    savePost();
  }, [data]);

  return (
    <Container>
      <Formik
        initialValues={{} as PostInput}
        validationSchema={validationSchema}
        onSubmit={handleCreatePost}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <InputView>
            <Input
              error={!!errors.title}
              placeholder="Título"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
            />

            <Input
              error={!!errors.description}
              placeholder="Descrição"
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
            />

            <AddButton onPress={handleSubmit}>
              <AddText>{errors.title || 'ADICIONAR'}</AddText>
            </AddButton>
          </InputView>
        )}
      </Formik>
    </Container>
  );
};

export default AddPost;
