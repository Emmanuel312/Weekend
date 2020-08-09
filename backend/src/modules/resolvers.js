const posts = [
  {
    id: 0,
    title: "title1",
    description: "description",
  },
  {
    id: 1,
    title: "title2",
    description: "description",
  },
  {
    id: 2,
    title: "title3",
    description: "description",
  },
];

module.exports = {
  Query: {
    async getPost(_, { id }) {
      const post = posts.find((post) => post.id == id);

      return post;
    },

    async getPosts() {
      return posts;
    },
  },

  Mutation: {
    async createPost(_, { input }) {
      const { title, description } = input;
      const newPost = {
        id: Math.floor(Math.random() * 100000),
        title,
        description,
      };

      posts.push(newPost);

      return newPost;
    },
  },
};
