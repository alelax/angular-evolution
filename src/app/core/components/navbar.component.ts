import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Angular Training</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li routerLink="demo1" routerLinkActive="text-sky-400"><a>Demo 1</a></li>
          <li routerLink="demo2" routerLinkActive="text-sky-400"><a>Demo 2</a></li>
          <li routerLink="demo3" routerLinkActive="text-sky-400"><a>Demo 3</a></li>
        </ul>
      </div>
    </div>
  `,
  styles: ``
})
export class NavbarComponent {

}
