import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/User';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <p>CURRENT ID: {{ currentId }}</p>

    <<pre>{{ user | json }}</pre>>
  `,
  styles: ``
})
export class UserProfileComponent {
  
  currentId: number | undefined;

  @Input() set id(val: number | undefined) {
    console.log('val: ', val);
    this.currentId = val
    this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${val}`)
    .subscribe( res => {
      this.user = res
    })

  };
  user: User | undefined
  http = inject(HttpClient)

  
}
