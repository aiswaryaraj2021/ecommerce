import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist:any=[]

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    if(localStorage.getItem("wishlist")){
      this.wishlist = JSON.parse(localStorage.getItem("wishlist") || "")
      console.log(this.wishlist);
      
    }
  }

  addtoCart(product:any){
    this.cartservice.addtoCart(product)
    
  }

}
