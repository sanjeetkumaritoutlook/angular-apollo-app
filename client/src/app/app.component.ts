import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular + Apollo Client</h1>
    <ul>
      <li *ngFor="let user of users">{{ user.id }} - {{ user.name }}</li>
    </ul>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            users {
              id
              name
            }
          }
        `
      })
      .valueChanges.subscribe((result: any) => {
        this.users = result?.data?.users;
      });
  }
}
