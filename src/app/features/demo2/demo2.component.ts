import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    

    @for (user of users$ | async; track user.id) {
      <p>
        {{ user.name }}
      </p>
    }
  `,
  styles: ``
})
export class Demo2Component {
  users$ = inject(HttpClient).get<User[]>('https://jsonplaceholder.typicode.com/users');
  
}
