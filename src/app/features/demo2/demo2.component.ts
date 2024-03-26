import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [],
  template: `
    

    @for (user of users; track user.id) {
      <p>
        {{ user.name }}
      </p>
    }
  `,
  styles: ``
})
export class Demo2Component {
  http = inject(HttpClient);
  users: User[] = [];

  constructor() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        console.log('users: ', res);
        this.users = res;        
      })
  }

}
