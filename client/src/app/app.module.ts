import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { Apollo } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, ApolloClient } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [HttpLink,Apollo,
     {
      provide: APOLLO_OPTIONS,
      useFactory: (): ApolloClientOptions<any> => {
        return {
          cache: new InMemoryCache(),
          uri: 'http://localhost:4000/graphql', // your GraphQL server
        };
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
