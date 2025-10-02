const { ApolloServer, gql } = require('apollo-server');

// Schema
const typeDefs = gql`
  type User {
    id: ID
    name: String
  }

  type Query {
    users: [User]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    users: () => [
      { id: "1", name: "Sanjeet" },
      { id: "2", name: "Kumar" }
    ]
  }
};

// Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
