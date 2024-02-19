import { AfterViewInit, Component, computed, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="centred-page sm">
      
      @if (logged()) {
        <h1 class="page-title">Hi Dev</h1>
        <button class="btn" (click)="logOut()">Logout</button>
      } @else {
        <h1 class="page-title">Login</h1>
        <button class="btn" (click)="singIn()">Login</button>
      }

    </div>    
  `,
  styles: [``],
})
export class AppComponent {

  logged = signal<boolean>(false);

  singIn() {
    this.logged.set(true);
  }

  logOut() {
    this.logged.set(false);
  }

}


