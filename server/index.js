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

//process.env.PORT is required: Render injects the correct port into PORT.
//4000 for client frontend port, enables CORS for  client domain:
const PORT = process.env.PORT || 4000;
server.listen({ port: PORT, cors: { origin: '*' } }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
