import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = signal<Product[]>([])

  cartIsEmpty = computed(() => this.items().length === 0);
  totalCartItems = computed(() => this.items().length);
  totalCartCost = computed(() => this.items().reduce( (acc, curr) => acc + curr.cost, 0));

  constructor() { }

  addToCart(itemToAdd: Product) {
    const idInCart = this.items().find( item => item.id === itemToAdd.id);
    if (!idInCart) this.items.update(items => [...items, itemToAdd]);
  }

  removeFromCart(id: number) {
    this.items.update(items => items.filter(i => i.id !== id))
  }


  clearCart() {
    this.items.set([])
  }

}
