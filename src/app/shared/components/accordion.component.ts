import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  template: `
    <div class="collapse collapse-arrow bg-base-200">
        <input type="radio" [name]="groupName" [checked]="selected" /> 
        <div class="collapse-title text-xl font-medium">
          {{ title }}
        </div>
        <div class="collapse-content"> 
          <ng-content></ng-content>
        </div>
      </div>
  `,
  styles: ``
})
export class AccordionComponent {
  @Input() title: string = '';
  @Input() groupName: string = 'accordion-group';
  @Input({ transform: booleanAttribute }) selected = false;
}
