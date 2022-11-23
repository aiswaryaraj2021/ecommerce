import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any=[]
  totalPrice=0
  constructor(private cartservice:CartService,private router:Router) { }

  ngOnInit(): void {
   this.cartservice.getproducts().subscribe((data)=>{
    this.products=data
    console.log(this.products);
   })
  this.totalPrice= this.cartservice.gettotalprice()
  }
  removeitemcart(item:any){
    this.cartservice.removeitemcart(item)
    this.totalPrice=this.cartservice.gettotalprice()
  }
  removeall(){
    this.cartservice.removeAllitems()
  }

  //checkout:apply 10% discount when cart is more than 3 items:
  checkout(){
    if(this.products.length>=3){
      let discount=(this.totalPrice*10)/100
      let discountprice = this.totalPrice-discount
      alert('Your Order is confirmed!! And total price after discount is '+Math.floor(discountprice))
      this.removeall()
      this.router.navigateByUrl('')
    }
    else{
      alert('Your Order is confirmed!! And total price is '+Math.floor(this.totalPrice))
      this.removeall()
      this.router.navigateByUrl('')
    }
  }

}
