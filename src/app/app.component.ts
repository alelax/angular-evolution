import { AfterViewInit, Component, computed, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PhoneComponent } from './shared/components/phone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PhoneComponent],
  template: `
    <div class="centered-page sm flex flex-col gap-3">
      <app-phone
        [url]="'assets/images/vertical-landscape.webp'"
        [alt]="'landscape'"
        size="100"
        showTitle="true"
       />
    </div>
  `,
  styles: [``],
})
export class AppComponent {

  


}


