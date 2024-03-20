import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent ],
  template: `
    <div class="centered-page sm flex gap-3">
      
      <app-navbar></app-navbar>
      
      <hr>

      <div class="max-w-screen-lg mx-3 lg:mx-auto">
        <router-outlet />
      </div>
    

    </div>
  `,
  styles: [``],
})
export class AppComponent {  

}


