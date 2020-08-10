import { gql, useMutation } from '@apollo/client';
import { IPost } from '../../queries/post';

export interface PostInput {
  title: string;
  description: string;
}

export interface CreatePostResult {
  createPost: IPost;
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

  return useMutation<CreatePostResult, { post: PostInput }>(mutation);
}
