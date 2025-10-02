## install specific version of angular
npx @angular/cli@17 new client --standalone=false

ng new your_project_name --standalone=false

or

npm init @angular/cli@17 client

Run client: npm start

➜  Local:   http://localhost:4200/

➡️ You should see “Angular + Apollo Client” and list of users fetched from Apollo Server. 🎉

Run server: npm start (node+Expressjs)

🚀 Server ready at http://localhost:4000/

Apollo Server (backend) running at localhost:4000/graphql

## install graphql

Inside your client/ Angular project:

```
npm install apollo-angular@10 @apollo/client graphql
```

Apollo Angular v10 (the one that works with Angular 17), they removed ApolloModule.

```
import { Apollo } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, ApolloClient } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';

```

📦 This installs:

apollo-angular → Angular integration for Apollo Client

@apollo/client → Core Apollo Client library (queries, mutations, caching)

graphql → GraphQL query parser (needed by Apollo Client)

If you prefer Apollo Server with Express (instead of the built-in apollo-server), you’d install:
```
npm install express apollo-server-express graphql
```

## Architecture to be deployed on Render

```
angular-apollo-app/
│
├── client/   (Angular + Apollo Client)
│
└── server/   (Apollo Server with Node.js/Express)
```
✅ Summary:

Use Apollo Client in Angular, Apollo Server in Node.js.

Best hosting for both = Render (since it supports Node and frontend).

✅ Render = best choice for enterprise-level full-stack app with Angular + GraphQL.

Client + Server + DB = basic full-stack app.

Modern full-stack apps often involve GraphQL/REST APIs, caching, authentication, devops, and external services.