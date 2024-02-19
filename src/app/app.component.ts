import { AfterViewInit, Component, computed, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

type Product = {
  id: number,
  name: string,
  cost: number,
  description: string
}

const initialState: Product[] = [
  {id: 1, name: 'Chocolate', cost: 3, description: 'Bla bla bla...'},
  {id: 2, name: 'Milk', cost: 1, description: 'ciao ciaoo...'},
  {id: 3, name: 'Biscuits', cost: 2, description: 'so gooood....'}
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <!-- @for -->
    <div class="centred-page sm">
      @for(product of products(); track product.id) {
        <button class="btn" (click)="selectProduct(product)">{{ product.name }}</button>
      } 


      @if (activeProduct()) {
        <h1 class="text-2xl">Product Details</h1>
        <div>€ {{ activeProduct()?.cost }}</div>
        <div>{{ activeProduct()?.description }}</div>    
      }
      
    </div>
  `,
  styles: [``],
})
export class AppComponent {

  products = signal<Product[]>(initialState);
  
  activeProduct = signal<Product | null>(null);

  selectProduct(product: Product) {
    this.activeProduct.set(product);
  }

}


