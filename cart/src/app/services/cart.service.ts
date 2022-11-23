import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartitemList=new BehaviorSubject([])
  cartItemListArray:any = []
  constructor() { }

  //to get cart item to cart component
  getproducts(){
      return this.cartitemList.asObservable()
  }

  addtoCart(product:any){
    this.cartItemListArray.push(product)
    this.cartitemList.next(this.cartItemListArray)
    console.log(this.cartitemList);
    
    this.gettotalprice()
  }

  gettotalprice(){
    let grandtotal=0
    this.cartItemListArray.map((item:any)=>{
      grandtotal+=item.price
      console.log(grandtotal);
    })
    return grandtotal
  }

  //remove item from the cart
  removeitemcart(product:any){
    this.cartItemListArray.map((item:any,index:any)=>{
      if(product.id==item.id){
        this.cartItemListArray.splice(index,1)
      }
    })
    this.cartitemList.next(this.cartItemListArray)
  }

  //remove all items
  removeAllitems(){
    this.cartItemListArray=[]
    this.cartitemList.next( this.cartItemListArray)
  }

}
