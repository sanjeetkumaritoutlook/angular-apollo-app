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
import { environment } from '../environments/environment';
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
  providers: [Apollo,
     {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink): ApolloClientOptions<any> => {
        return {
          link: httpLink.create({ uri: environment.graphqlUri }),
          cache: new InMemoryCache(),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
