import { Component } from '@angular/core';
import { AlertComponent } from '../../../shared/components/alert.component';

@Component({
  selector: 'app-alert-demo',
  standalone: true,
  imports: [AlertComponent],
  template: `
    <div class="flex flex-col gap-4 m-4">
          <app-alert>msg</app-alert>
          <app-alert variant="info">msg</app-alert>
          <app-alert variant="success">msg</app-alert>
          <app-alert variant="error">msg</app-alert>
      </div>
  `,
  styles: ``
})
export default class AlertDemoComponent {

}
