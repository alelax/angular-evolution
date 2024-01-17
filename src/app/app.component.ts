import { AfterViewInit, Component, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="centred-page sm">
      <h1 class="page-title">Counter Demo with Signal</h1>
      
      <button class="btn" (click)="dec()">-</button>
      <span class="text-2xl">{{ counter() }}</span>
      <button class="btn" (click)="inc()">+</button>
      <button class="btn" (click)="reset()">reset</button>
      
    </div>    
  `,
  styles: [``],
})
export class AppComponent {

  /*
  * START::Classic-way
  * */
  counter_old = 0

  dec_old() {
    this.counter_old--;
  }

  inc_old() {
    this.counter_old++
  }

  reset_old() {
    this.counter_old = 0
  }
  /*
  * END::Classic-way
  * */


  /*
  * START::Signal-way
  * */
  counter = signal<number>(0);

  constructor() {
    /*
    * Per far si che la funzione venga eseguita ogni volta che il signal cambia, è necessario
    * solamente utilizzare il signal al suo interno.
    * */
    effect(() => localStorage.setItem('counter', JSON.stringify(this.counter())));
  }

  dec() {
    this.counter.update(counter => counter - 1);
  }

  inc() {
    this.counter.update(counter => counter + 1);
  }

  reset() {
    this.counter.set(0);
  }
  /*
  * END::Signal-way
  * */

}
