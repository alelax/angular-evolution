import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [],
  template: `
    <p>
      demo1 works! {{ title }}
    </p>
  `,
  styles: ``
})
export class Demo1Component {

  @Input() title: string = '';

}
