import { AfterViewInit, Component, computed, effect, ElementRef, signal, ViewChild } from '@angular/core';
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
      <span 
        class="text-2xl"
        [style.color]="isZeroColorOptimized()"
      >{{ counter() }}</span>
      <button class="btn" (click)="inc()">+</button>
      <button class="btn" (click)="reset()" [style.display]="hideIfZero()">reset</button>
      
      <!-- PROVA GITHUB 2 -->

      <div [hidden]="!isZero()">Counter is zero!</div>
      <!--<div [hidden]="!isZero_old()">Counter is zero OLD!</div>-->
      <input class="input" type="text" (keydown)="doNothing_old()">
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
  * La change detection triggera questo metodi ogni volta
  * che il template viene renderizzato nuovamente anche
  * quando non sono dovrebbe. Infatti durante il verificarsi dell'evento
  * keydown, non dobbiamo verificare che il counter è === 0 o meno eppure
  * il metodo isZero viene invocato piu volte.
  * */
  isZero_old(): boolean {
    console.log('isZero OLD')
    return this.counter() === 0;
  }

  doNothing_old() {
    console.log('do nothing OLD')
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

  isZero = computed(() => {
    console.log('is zero');
    return this.counter() === 0
  })

  isZeroColor = computed(() => this.counter() === 0 ? 'red' : 'lightgreen');

  /*
  * Il risultato è lo stesso della computed property "isZeroColor". La differenza sta nel numero di volte che questa computed
  * viene processata.
  * Prima, in "isZeroColor" la computed viene processata ogni volta che "this.counter()" cambia, ma in realtà se il counter è
  * 1, 2, 3 ecc... la condizione sarà sempre vera e non c'è bisogno di rifare la verifica.
  *
  * Utilizzando la computed propertu "isZero" anzi che la condizione "this.counter() === 0" la computed property verrà
  * invocata solo quando la condizione "this.counter() === 0" cambia stato passando da true a false oppure da false a true
  * ottimizzando così di molto le prestazioni.
  * */
  isZeroColorOptimized = computed( () => this.isZero() ? 'red' : 'lightgreen');

  hideIfZero = computed(() => this.counter() === 0 ? 'none' : 'inline');

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
