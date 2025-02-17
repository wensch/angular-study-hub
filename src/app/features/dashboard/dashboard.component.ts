import { Product, ProductService } from 'src/app/services/product.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  products$: Observable<Product[]>

  constructor(private productService: ProductService, private cartService: CartService) {
    this.products$ = this.productService.getProducts()
  }


  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
}
