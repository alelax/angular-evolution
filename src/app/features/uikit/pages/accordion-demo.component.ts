import { Component } from '@angular/core';
import { AccordionComponent } from '../../../shared/components/accordion.component';

@Component({
  selector: 'app-accordion-demo',
  standalone: true,
  imports: [AccordionComponent],
  template: `
    <app-accordion title="one" selected>
          lorem ipsum
      </app-accordion>
      <app-accordion title="two">
          <em>lorem ipsum</em>
      </app-accordion>
      <app-accordion title="three">
          <button class="btn btn-info">CLICK ME</button>
      </app-accordion>
  `,
  styles: ``
})
export default class AccordionDemoComponent {

}
