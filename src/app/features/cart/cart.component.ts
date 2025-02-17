import { OrderService } from './../../core/services/order.service';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../core/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  cart = this.cartService.getCart();
  isProcessing = false;
  orderSuccess = false;
  total = computed(() => this.cart().reduce((sum, item) => sum + item.price, 0));

  constructor(private cartService: CartService, private orderService: OrderService) {}

  placeOrder() {
    if (this.cart().length === 0) return;

    this.isProcessing = true;
    this.orderService.placeOrder(this.cart()).subscribe({
      next: () => {
        this.orderSuccess = true;
        this.cartService.clearCart();
        this.isProcessing = false;
      },
      error: (err) => {
        console.error('Erro ao finalizar compra', err);
        this.isProcessing = false;
      }
    });
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId); // Remove o produto do carrinho
  }

  clearCart() {
    this.cartService.clearCart(); // Esvazia o carrinho
  }
}
