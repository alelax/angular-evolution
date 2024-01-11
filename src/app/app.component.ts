import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

type Alert = {
  msg: string;
  type: 'primary' | 'success' | 'danger'
}

type Coords = {
  x: number
  y: number
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
        'alert-info': alert.type === 'primary',
        'alert-error': alert.type === 'danger',
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
      
      <input type="text">
      
      <button
        class="btn"
        (mousemove)="show($event)"
        (mouseout)="hide()"
      >
        OVER
      </button>
      
      <div>{{ position?.x }} - {{ position?.y }}</div>

      <div
        class="absolute bg-black text-white p-3 rounded-xl pointer-events-none"
        [style.left.px]="position?.x"
        [style.top.px]="position?.y"
        [hidden]="!position"
      >
        TOOLTIP
      </div>
      
    </div>
    
    
    
  `,
  styles: [`
    
  `],
})
export class AppComponent {

  position: Coords | null = null;

  alert: Alert = {
    msg: 'hello',
    type: 'primary'
  }

  show(event: MouseEvent) {
    this.position = {
      x: event.clientX + 10,
      y: event.clientY + 10
    }

  }

  hide() {
    this.position = null
  }
}
