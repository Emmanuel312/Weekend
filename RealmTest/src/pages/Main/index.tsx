import React, { useEffect, useState } from 'react';
import { Text, FlatList } from 'react-native';
import { useGetPosts, IPost } from '../../services/queries/post';
import { Container } from './styles';
import AddPost from '../../components/AddPost';
import Post from '../../components/Post';
import getRealm from '../../services/realm';

const Main: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const { data, error, loading } = useGetPosts();

  useEffect(() => {
    if (data) {
      setPosts(data.getPosts);
    }
  }, [data]);

  useEffect(() => {
    async function loadPosts() {
      const realm = await getRealm();

      const data = realm.objects('Post');
      console.log(data);

      setPosts(data);
    }

    loadPosts();
  }, []);
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Container>
      <AddPost />
      <FlatList
        extraData={posts}
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Post post={item} />}
      />
    </Container>
  );
};

export default Main;
