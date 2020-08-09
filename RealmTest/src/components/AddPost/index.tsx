import React from 'react';
import { View, TouchableOpacity, Text, Button, TextInput } from 'react-native';
import { useCreatePost, PostInput } from '../../services/mutations/post';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { Container } from './styles';

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

  return (
    <View>
      <Formik
        initialValues={{} as PostInput}
        validationSchema={validationSchema}
        onSubmit={handleCreatePost}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#000' }}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
            />

            <TextInput
              style={{ borderWidth: 1, borderColor: '#000' }}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
            />
            <Button onPress={handleSubmit} title="Submit" />

            <Text>{errors.title}</Text>
            <Text>{errors.description}</Text>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddPost;
