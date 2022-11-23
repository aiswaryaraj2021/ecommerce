import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishList = new BehaviorSubject([])

  wishListArray:any=[]

  constructor() { }

 addtowlist(product:any){
  this.wishListArray.push(product)
  console.log(this.wishListArray);
  this.wishList.next(this.wishListArray)
  let wlist=this.wishList['_value']
  localStorage.setItem("wishlist",JSON.stringify(wlist))
 }
}

