import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

type Alert = {
  msg: string;
  type: 'primary' | 'success' | 'danger'
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="centred-page sm flex flex-col gap-3">
      
      <h1 class="page-title">Alert example</h1>
      
      <div
        class="alert"
        [ngClass]="{
        'alert-primary': alert.type === 'primary',
        'alert-danger': alert.type === 'danger',
        'alert-success': alert.type === 'success',
      }"
      >
        {{ alert.msg }}
      </div>

      <div class="flex gap-3">
        <button class="btn" (click)="alert = { msg: 'hello 1', type: 'primary' }">primary</button>
        <button class="btn" (click)="alert = { msg: 'hello 2', type: 'danger' }">danger</button>
        <button class="btn" (click)="alert = { msg: 'hello 3', type: 'success' }">success</button>
      </div>  
    </div>
    
    
    
  `,
  styles: [`
    
  `],
})
export class AppComponent {
  title = 'angular-demo';

  alert: Alert = {
    msg: 'hello',
    type: 'primary'
  }
}
