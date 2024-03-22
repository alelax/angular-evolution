import { Component } from '@angular/core';
import { TimelineComponent } from '../../../shared/components/timeline.component';

@Component({
  selector: 'app-timeline-demo',
  standalone: true,
  imports: [TimelineComponent],
  template: `
    <app-timeline [timelineItems]="timelineList" vertical />
    <app-timeline [timelineItems]="timelineList" />
  `,
  styles: ``
})
export default class TimelineDemoComponent {
  timelineList = [
    { start: '2014', end: 'description' },
    { start: '2015', end: 'lorem...' },
    { start: '2018', end: 'bla bla' },
    { start: '2022', end: 'another' },
    { start: '2023', end: 'hello' },
  ]
}
