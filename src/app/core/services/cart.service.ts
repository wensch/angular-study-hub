import { Injectable, signal } from '@angular/core';
import { Product } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = signal<Product[]>(this.loadCart());

  private loadCart(): Product[] {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart()));
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    this.cart.update(cart => [...cart, product]);
    this.saveCart()
  }

  removeFromCart(productId: number) {
    this.cart.update(cart => cart.filter(product => product.id !== productId));
    this.saveCart()
  }

  clearCart() {
    this.cart.set([]);
    localStorage.removeItem('cart');
  }
}
