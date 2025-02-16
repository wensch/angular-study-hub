import { Product, ProductService } from 'src/app/services/product.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  products$: Observable<Product[]>

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts()
  }
}
