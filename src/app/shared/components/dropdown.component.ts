import { NgClass } from '@angular/common';
import { Component, Input, Output, booleanAttribute, EventEmitter } from '@angular/core';

export type DropDownItem = {
  label: string;
  value: any;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgClass],
  template: `
    <div 
      class="dropdown"
      [ngClass]="{
        'dropdown-top dropdown-end': placement === 'top',
        'dropdown-left': placement === 'left',
        'dropdown-right': placement === 'right',
        'dropdown-hover': hover
      }"
    >
      <div tabindex="0" role="button" class="btn m-1">
          <ng-content></ng-content>
      </div>
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          @for (item of items; track $index) {
            <li (click)="selectItem(item)"><a>{{ item.label }}</a></li>
          }
      </ul>
    </div>
  `,
  styles: ``
})
export class DropdownComponent {

  @Input() items: DropDownItem[] = []
  @Input() placement: 'left' | 'right' | 'bottom' | 'top' = 'bottom';
  @Input({ transform: booleanAttribute }) hover = false;

  @Output() select = new EventEmitter<DropDownItem>();

  selectItem(item: DropDownItem) {
    this.select.emit(item);
    const el = document.activeElement as HTMLElement;
    el.blur();
  }

}
