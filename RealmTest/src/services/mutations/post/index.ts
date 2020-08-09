import { gql, useMutation } from '@apollo/client';
import { Post } from '../../queries/post';

export interface PostInput {
  title: string;
  description: string;
}

export function useCreatePost() {
  const mutation = gql`
    mutation CreatePost($post: PostInput) {
      createPost(input: $post) {
        id
        title
        description
      }
    }
  `;

  return useMutation<Post, { post: PostInput }>(mutation);
}
