import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from './core/components/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent ],
  template: `
    
      
      <app-navbar></app-navbar>
      
      <hr>

      <div class="max-w-screen-lg mx-3 lg:mx-auto">
        <router-outlet />
      </div>
    

    
  `,
  styles: [``],
})
export class AppComponent {  

  router = inject(Router);

  constructor() {
    
    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
      }
    })

  }
}


