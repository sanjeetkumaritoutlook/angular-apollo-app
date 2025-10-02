GraphQL is a query language for APIs and a runtime for executing those queries.

It allows clients to request exactly the data they need, nothing more and nothing less.

different from REST

5 Key conepts:
## Query
Fetch data from the server (like GET in REST).
```
query {
  user(id: "1") {
    id
    name
    email
  }
}

```
Response:
```
{
  "data": {
    "user": {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```
✅ Client gets exactly what it asked for.
## Mutation
Modify data on the server (like POST/PUT/DELETE in REST).
```
mutation {
  createUser(name: "Alice", email: "alice@example.com") {
    id
    name
  }
}
```
Creates a new user and returns only id and name.
## Subscription
Real-time updates from the server (like WebSockets).
```
subscription {
  newUser {
    id
    name
  }
}
```
The client receives real-time updates whenever a new user is created.

## Schema
Defines types, queries, and mutations of your API.
## Resolver
Functions that return the requested data for each field.

## Apollo Client

Used on the frontend to interact with a GraphQL API.

Features:

Query and mutate GraphQL data.

Automatic caching of results.

State management.

Works with React, Angular, Vue, and vanilla JS.
```
import { Apollo, gql } from 'apollo-angular';

constructor(private apollo: Apollo) {}

getUsers() {
  this.apollo.query({
    query: gql`
      query {
        users {
          id
          name
        }
      }
    `
  }).subscribe(result => {
    console.log(result.data);
  });
}
```
## Apollo Server

Used on the backend to create a GraphQL API.

Works with Node.js (Express, Fastify, etc.).

Handles schema definition, resolvers, and subscriptions.
```
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID
    name: String
  }

  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: () => [{ id: '1', name: 'Alice' }]
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
```
