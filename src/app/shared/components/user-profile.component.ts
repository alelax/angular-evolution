import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/User';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <pre>{{ user | json }}</pre>
  `,
  styles: ``
})
export class UserProfileComponent implements OnChanges {
  @Input() id: number | undefined;
  user: User | undefined
  http = inject(HttpClient)

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'].firstChange) {
      // ...
    }
    
    this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${changes['id'].currentValue}`)
      .subscribe(res => {
        this.user = res;
      })
  }
}
