import { AfterViewInit, Component, computed, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

type Product = {
  id: number,
  name: string,
  cost: number
}

const initialState: Product[] = [
  {id: 1, name: 'Chocolate', cost: 3},
  {id: 2, name: 'Milk', cost: 1},
  {id: 3, name: 'Biscuits', cost: 2}
]

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

    <!-- @switch e  @empty -->
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

    <!-- @for -->
    <div class="centred-page sm">
      @for(product of products(); track product.id; let i = $index; let l = $last; let f = $first; let odd = $odd; let even = $even) {
        <li>{{ i + 1 }} - {{ product.name }}</li>
      } @empty {
        <button class="btn" (click)="loadProducts()">Load</button>
      }

      <div *ngIf="hasProducts()">Ci sono {{ totalProducts() }} prodotti</div>
    </div>
  `,
  styles: [``],
})
export class AppComponent {

  logged = signal<boolean>(false);

  currentStep = signal<'step1' | 'step2' | 'final' | null>(null);

  products = signal<Product[]>([]);
  
  hasProducts = computed(() => this.products().length > 0);

  totalProducts = computed(() => this.products().length);

  singIn() {
    this.logged.set(true);
  }

  logOut() {
    this.logged.set(false);
  }

  loadProducts() {
    this.products.set(initialState)
  }

}


