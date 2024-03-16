import { AfterViewInit, Component, computed, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PhoneComponent } from './shared/components/phone.component';
import { UserProfileComponent } from './shared/components/user-profile.component';
import { TimelineComponent } from './shared/components/timeline.component';
import { AccordionComponent } from './shared/components/accordion.component';
import { AlertComponent } from './shared/components/alert.component';
import { DropdownComponent } from './shared/components/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DropdownComponent],
  template: `
    <div class="centered-page sm flex flex-col gap-3">
      <app-dropdown [items]="list">Click</app-dropdown>
    </div>
  `,
  styles: [``],
})
export class AppComponent {  

  list = [
    { label: 'item 1', value: 1},
    { label: 'item 2', value: 2},
    { label: 'item 3', value: 'something'},
  ]

}


