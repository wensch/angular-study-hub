import { Injectable, signal } from '@angular/core';
import { Product } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = signal<Product[]>([]);

  // Método para obter o estado do carrinho
  getCart() {
    return this.cart;
  }

  // Método para adicionar um produto ao carrinho
  addToCart(product: Product) {
    this.cart.update(cart => [...cart, product]); // Adiciona o produto mantendo os anteriores
  }

  // Método para remover um produto do carrinho
  removeFromCart(productId: number) {
    this.cart.update(cart => cart.filter(product => product.id !== productId));
  }

  // Método para limpar o carrinho
  clearCart() {
    this.cart.set([]); // Esvazia o carrinho
  }
}
