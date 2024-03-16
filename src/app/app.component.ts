import { AfterViewInit, Component, computed, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PhoneComponent } from './shared/components/phone.component';
import { UserProfileComponent } from './shared/components/user-profile.component';
import { TimelineComponent } from './shared/components/timeline.component';
import { AccordionComponent } from './shared/components/accordion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AccordionComponent],
  template: `
    <div class="centered-page sm flex flex-col gap-3">
      <app-accordion title="lorem impsum 1">
        <p>Lorem 1</p>
      </app-accordion>
      <app-accordion title="lorem impsum 2" selected>
        <p><em>Hello</em></p>
      </app-accordion>
      <app-accordion title="lorem impsum 3">
        <button class="btn btn-primary" (click)="doSomething()">CLICK</button>
      </app-accordion>
    </div>
  `,
  styles: [``],
})
export class AppComponent {  


  doSomething() {}
}


