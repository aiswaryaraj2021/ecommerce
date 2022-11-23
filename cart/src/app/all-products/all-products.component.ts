import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  productDetails:any
  search:any;
  constructor(private api:ApiService,private wlist:WishlistService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.api.getproducts()
    .subscribe((result:any)=>{
      this.productDetails=result.products   
      this.productDetails.forEach((item:any)=>{
        Object.assign(item,{quantity:1,total:item.price})
      })   
    })
    this.api.searchTerm.subscribe((data)=>{
      this.search=data
    })
  }
  addtowishlist(product:any){
    console.log(product);
    
    this.wlist.addtowlist(product)
    alert("Product Added To wishlist")
  }
  addtoCart(product:any){
    console.log(product);
    
    this.cartservice.addtoCart(product)
  }
}
