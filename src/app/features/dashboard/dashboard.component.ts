import { Product, ProductService } from 'src/app/core/services/product.service';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  products$: Observable<Product[]>
  cartCount = computed(() => this.cartService.getCart().length)

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    this.products$ = this.productService.getProducts()
  }


  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
