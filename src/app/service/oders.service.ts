import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../oder';
import { Observable } from 'rxjs';
import { UpdatedOrder } from '../update-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = 'https://localhost:7083/api/orders';
 
  constructor(private http: HttpClient) { }

  placeOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

   // Edit an existing order
   editOrder(orderId: number, updatedOrder: UpdatedOrder): Observable<any> {
    return this.http.put(`${this.apiUrl}/${orderId}`, updatedOrder);
  }

  // Get order by ID
  getOrderById(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${orderId}`);
  }
}
