import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public cartItem = [];
  constructor() { }

  addToCart(item){
    this.cartItem.push(item)
  }

  removeFromCart(index){
    this.cartItem.slice(index,1);
  }
}
