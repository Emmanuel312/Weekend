import React from 'react';
import { View, Text } from 'react-native';
import { useGetPosts } from '../../services/queries/post';
import { Container } from './styles';
import AddPost from '../../components/AddPost';

const Main: React.FC = () => {
  const { data, error, loading } = useGetPosts();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Container>
      {data?.getPosts?.map((post) => (
        <View>
          <Text>{post.id}</Text>
          <Text>{post.title}</Text>
          <Text>{post.description}</Text>
        </View>
      ))}

      <AddPost />
    </Container>
  );
};

export default Main;
