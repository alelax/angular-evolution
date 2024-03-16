import { AfterViewInit, Component, computed, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PhoneComponent } from './shared/components/phone.component';
import { UserProfileComponent } from './shared/components/user-profile.component';
import { TimelineComponent } from './shared/components/timeline.component';
import { AccordionComponent } from './shared/components/accordion.component';
import { AlertComponent } from './shared/components/alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlertComponent],
  template: `
    <div class="centered-page sm flex flex-col gap-3">
      <app-alert 
        denyLabel="cancel"
        acceptLabel="confirm"
        variant="error"
        (onCancel)="delete()" 
        (onConfirm)="approve()"
      >
        <p>this is a message</p>
      </app-alert>
      
      <app-alert
        (onCancel)="deny()" 
        (onConfirm)="accept()"
      >
        <div class="flex flex-col gap-5">
          <em>bla bla</em>
          <strong>bla bla</strong>
          <input type="text" class="input input-bordered">
        </div>
      </app-alert>

      <app-alert
        (onCancel)="deny()" 
        (onConfirm)="accept()"
        variant="success"
      >
        Completato
      </app-alert>
      

    </div>
  `,
  styles: [``],
})
export class AppComponent {  

  

  delete() {
    console.log('delete')
  }
  approve() {
    console.log('approve')
  }
  deny() {
    console.log('deny')
  }
  accept() {
    console.log('accept')
  }

}


