import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="centred-page sm flex flex-col gap-3">
      
      <div>Date 1 {{ today | date: 'dd-MM-yyyy' }}</div>
      <div>Date 2 {{ timestamp | date: 'hh:mm:ss' }}</div>
      
      <div>{{ value | date: '1.2-4' }}</div>
      
      <div>{{ user | json }}</div>
      <div>{{ users | json }}</div>
      
    </div>
    
    
    
  `,
  styles: [`
    
  `],
})
export class AppComponent {

  today = new Date();
  timestamp = 1202423006;
  value = 1.1234567890;
  user = { name: 'Fabio', surname: 'Biondi' };
  users = [{ name: 'Fabio', surname: 'Biondi' },{ name: 'Fabio', surname: 'Biondi' }];

}
