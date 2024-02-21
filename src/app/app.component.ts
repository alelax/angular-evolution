import { AfterViewInit, Component, computed, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PhoneComponent } from './shared/components/phone.component';
import { UserProfileComponent } from './shared/components/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PhoneComponent, UserProfileComponent],
  template: `
    <div class="centered-page sm flex flex-col gap-3">
      <app-user-profile 
        [items]="list"
      />

      <button 
        class="btn"
        (click)="inc()"
      >+</button>
    </div>
  `,
  styles: [``],
})
export class AppComponent {

  list: any = [1, 2, 3]


  inc() {
    this.list = [...this.list, 4]
  }
  


}


