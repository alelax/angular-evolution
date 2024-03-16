import { Component, Input } from '@angular/core';

export type DropDownItem = {
  label: string;
  value: any;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  template: `
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn m-1">
          <ng-content></ng-content>
      </div>
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          @for (item of items; track $index) {
            <li><a>{{ item.label }}</a></li>
          }
      </ul>
    </div>
  `,
  styles: ``
})
export class DropdownComponent {

  @Input() items: DropDownItem[] = []
}
