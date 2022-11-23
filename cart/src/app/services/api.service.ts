import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchTerm = new BehaviorSubject("")
  constructor(private http:HttpClient) { }

  //to get all products from server
  getproducts(){
    return this.http.get('http://localhost:3002/all-products')
    
  }
}
