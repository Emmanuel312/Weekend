import { useQuery, gql } from '@apollo/client';

export interface IPost {
  id: number;
  title: string;
  description: string;
}

interface IGetPostsResponse {
  getPosts: IPost[];
}

interface IGetPostResponse {
  getPost: IPost;
}

interface IGetPostInput {
  id: number;
}

export function useGetPosts() {
  const query = gql`
    query {
      getPosts {
        id
        title
        description
      }
    }
  `;

  return useQuery<IGetPostsResponse>(query);
}

export function useGetPost(id: number) {
  const query = gql`
    query GetPost($id: ID!) {
      getPost(id: $id) {
        id
        title
        description
      }
    }
  `;

  return useQuery<IGetPostResponse, IGetPostInput>(query, {
    variables: { id },
  });
}
