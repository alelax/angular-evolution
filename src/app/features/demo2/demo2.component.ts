import { HttpClient } from '@angular/common/http';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../../models/user';
import { Observable, delay } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    

    @for (name of names(); track $index) {
      <p>
        {{ name }}
      </p>
    }
  `,
  styles: ``
})
export class Demo2Component {
  
  users = toSignal(
    inject(HttpClient).get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        delay(2000)
      )
  )
  
  names = computed(() => this.users()?.map( user => user.name))


  
  
  
}
