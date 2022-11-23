import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
totalitems=0
  constructor(private api:ApiService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getproducts()
    .subscribe((data=>{
      this.totalitems=data.length
    }))
  }

  search(event:any){
    let searchvalue=event.target.value
    this.api.searchTerm.next(searchvalue)
  }

}
