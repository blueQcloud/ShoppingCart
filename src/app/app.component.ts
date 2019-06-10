import { Component } from '@angular/core';
import {NgForm, FormGroupDirective} from '@angular/forms';
import { Button } from 'protractor';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './shoppingCart.html'
})
export class AppComponent {
  title = 'Homemade Pizza';
  items = [{'item':'Original Cheese', 'price':10}, 
  {'item':`Korean BBQ`, 'price':18},
  {'item':'Sushi Pizza', 'price':17},
  {'item':'Nutella and Marshmellow', 'price':5}];
  orders = [];
  total = 0;
  taxes = 0;
  grandTotal = 0;

      constructor() {
      }

      addItem(f:NgForm){
        if (!f.value.katana || !f.value.quantity){
          return;
        }
        const order = { 
          item : f.value.katana.item, 
          price : f.value.katana.price,
          qty : f.value.quantity,
          subtotal : (f.value.quantity * f.value.katana.price),
        }

        this.orders.push(order);
        console.log(JSON.stringify(this.orders))
        console.log(JSON.stringify(f.value))
        this.recalculateSubtotal()
      }  
      removeItem(index:any) {
          this.orders.splice(index,1); // remove 1 item at ith place
          this.recalculateSubtotal()
      }  
      recalculateSubtotal() {
        this.total = 0;
        for(let num=0 ;num < this.orders.length; num++){
          this.total += this.orders[num].subtotal;
          this.taxes = (this.total * 0.07);
          this.grandTotal = (this.total + this.taxes);
          }
        }
      submitOrder(){
        alert("Order Received");
      }

  }
