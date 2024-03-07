import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const BASE_URL = "https://dummyjson.com/products?_limits=10"
@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(private http:HttpClient) { }

  getProds(){
    return this.http.get<any[]>(BASE_URL)
  }
}
