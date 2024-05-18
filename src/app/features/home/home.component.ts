import { Component, signal } from '@angular/core';
import { Product } from '../../models/product';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <div class="flex gap-6 justify-center">
      @for (product of products(); track product.id) {
        <div class="card w-full bg-base-100 shadow-xl mt-2">
            <figure><img [src]="product.image" [alt]="product.name" /></figure>
            <div class="card-body">
              <div class="">
                <h2 class="card-title">{{product.name}}</h2>
                <div class="card-title">€ {{product.cost}}</div>
              </div>
              <p>{{product.description}}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
        </div>
      }
    </div>
    
    <pre>{{products() | json}}</pre>
  `,
  styles: ``
})
export default class HomeComponent {

  products = signal<Product[]>(initialState);
  
}


const initialState: Product[] =[
  {
    id: 1,
    name: "Yonex Ezone",
    image: "https://www.tennis-point.it/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5e154ce3/images/019/058/01867000_000.jpg?q=80&sw=417",
    description: "lorem...",
    cost: 280
  },
  {
    id: 2,
    name: "Babolat Pure Aero",
    description: "lorem...",
    image: "https://www.tennis-point.it/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc722a905/images/009/060/02834000_000.jpg?q=80&sw=417",
    cost: 290
  },
  {
    id: 3,
    name: "Wilson Pro Staff",
    description: "lorem...",
    image: "https://www.tennis-point.it/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4f9f5472/images/007/051/03579000_000.jpg?q=80&sw=417",
    cost: 285
  }
]