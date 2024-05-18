import { Component, inject } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  template: `
    <p>
      cart works! {{ cartService.cartIsEmpty() }}
    </p>
  `,
  styles: ``
})
export default class CartComponent {
  cartService = inject(CartService);
}
