import { AfterViewInit, Component, computed, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <!-- @if @else -->
    <div class="centred-page sm">
      
      @if (logged()) {
        <h1 class="page-title">Hi Dev</h1>
        <button class="btn" (click)="logOut()">Logout</button>
      } @else {
        <h1 class="page-title">Login</h1>
        <button class="btn" (click)="singIn()">Login</button>
      }

    </div>    

    <!-- @switch -->
    <div class="centred-page sm">
      @switch (currentStep()) {
        @case ('step1') {
          <h1>Step 1</h1>
          <button class="btn" (click)="currentStep.set('step2')">Next</button>
        }
        @case ('step2') {
          <h1>Step 2</h1>
          <button class="btn" (click)="currentStep.set('final')">Next</button>
        }
        @case ('final') {
          <h1>Final step</h1>
        }
        @default {
          <h1>Welcome</h1>
          <button class="btn" (click)="currentStep.set('step1')">Next</button>
        }
      }
    </div>

  `,
  styles: [``],
})
export class AppComponent {

  logged = signal<boolean>(false);

  currentStep = signal<'step1' | 'step2' | 'final' | null>(null);

  singIn() {
    this.logged.set(true);
  }

  logOut() {
    this.logged.set(false);
  }

}


