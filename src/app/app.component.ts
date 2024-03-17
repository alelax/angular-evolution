import { AfterViewInit, Component, computed, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PhoneComponent } from './shared/components/phone.component';
import { UserProfileComponent } from './shared/components/user-profile.component';
import { TimelineComponent } from './shared/components/timeline.component';
import { AccordionComponent } from './shared/components/accordion.component';
import { AlertComponent } from './shared/components/alert.component';
import { DropdownComponent, DropDownItem } from './shared/components/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DropdownComponent],
  template: `
    <!-- <div class="centered-page sm flex gap-3"> -->
      
      <br>
      <br>
      <br>
      <br>
      <br>
      <app-dropdown [items]="list" (select)="doSomething($event)">BOTTOM</app-dropdown>
      <app-dropdown [items]="list" placement="right">RIGHT</app-dropdown>
      <app-dropdown [items]="list" placement="top">TOP</app-dropdown>
      <app-dropdown [items]="list" placement="left">LEFT</app-dropdown>
      <app-dropdown [items]="list" placement="left" hover>HOVER</app-dropdown>

    <!-- </div> -->
  `,
  styles: [``],
})
export class AppComponent {  

  list = [
    { label: 'item 1', value: 1},
    { label: 'item 2', value: 2},
    { label: 'item 3', value: 'something'},
  ]

  doSomething(event: DropDownItem) {
    console.log(event);
  }

}


