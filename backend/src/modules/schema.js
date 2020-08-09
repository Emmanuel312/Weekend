const resolvers = require("./resolvers");
const { makeExecutableSchema } = require("graphql-tools");

const postAttribs = `
    title: String!
    description: String!
`;

const typeDefs = `
    type Post {
        id: ID
        ${postAttribs}
    }

    type Query {
        getPost(id: ID!): Post
        getPosts: [Post]
    }

    input PostInput {
        ${postAttribs}
    }

    type Mutation {
        createPost(input: PostInput): Post
    }
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
