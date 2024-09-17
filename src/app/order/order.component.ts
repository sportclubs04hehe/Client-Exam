import { Component, ViewChild } from '@angular/core';
import { Order } from '../oder';
import { OrdersService } from '../service/oders.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  @ViewChild('orderForm') orderForm!: NgForm; 
  
  order: Order = {
    itemName: '',
    itemQty: 0,
    orderDelivery: new Date(),
    orderAddress: '',
    phoneNumber: ''
  };

  isOrderPlaced: boolean = false;

  constructor(private orderService: OrdersService) {}

  placeOrder() {
    this.orderService.placeOrder(this.order).subscribe(
      response => {
        console.log('Order placed successfully!', response);
        this.isOrderPlaced = true;
        this.orderForm.resetForm();
      },
      error => {
        console.error('Error placing order:', error);
      }
    );
  }

}
