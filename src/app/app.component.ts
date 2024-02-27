import { AfterViewInit, Component, computed, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PhoneComponent } from './shared/components/phone.component';
import { UserProfileComponent } from './shared/components/user-profile.component';
import { TimelineComponent } from './shared/components/timeline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PhoneComponent, UserProfileComponent, TimelineComponent],
  template: `
    <div class="centered-page sm flex flex-col gap-3">
      <app-timeline [timelineItems]="timelineList"/>
      <app-timeline [timelineItems]="timelineList" vertical/>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  timelineList = [
    { start: '2014', end: 'description' },
    { start: '2015', end: 'lorem...' },
    { start: '2018', end: 'bla bla' },
    { start: '2022', end: 'another' },
    { start: '2023', end: 'hello' },
  ]

  


}


