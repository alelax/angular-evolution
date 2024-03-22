import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-uikit',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive ],
  template: `
    <div class="flex justify-center">
        <button class="btn" routerLinkActive="text-sky-400" routerLink="accordion">Accordion</button>
        <button class="btn" routerLinkActive="text-sky-400" routerLink="alert">Alert</button>
        <button class="btn" routerLinkActive="text-sky-400" routerLink="dropdown">DropDown</button>
        <button class="btn" routerLinkActive="text-sky-400" routerLink="phone">Phone</button>
        <button class="btn" routerLinkActive="text-sky-400" routerLink="timeline">TimeLine</button>
        <button class="btn" routerLinkActive="text-sky-400" routerLink="variant-icon">Variant Icon</button>
      </div>
      
      <div class="my-5 flex justify-center">
          <div class="w-full">
            <router-outlet />
          </div>
      </div>
  `,
  styles: ``
})
export default class UikitComponent {

}
