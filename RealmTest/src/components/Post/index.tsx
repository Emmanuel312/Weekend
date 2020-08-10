import React from 'react';
import { IPost } from '../../services/queries/post';

import { Container, Title, Description } from './styles';

interface Props {
  post: IPost;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <Container key={post.id}>
      <Title>{post.title}</Title>
      <Description>{post.description}</Description>
    </Container>
  );
};

export default Post;
