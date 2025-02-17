import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Order {
  id?: number; // O JSON Server gera um ID automaticamente
  products: Product[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  placeOrder(products: Product[]): Observable<Order> {
    const total = products.reduce((sum, item) => sum + item.price, 0);
    const order: Order = { products, total };

    return this.http.post<Order>(this.apiUrl, order);
  }
}
