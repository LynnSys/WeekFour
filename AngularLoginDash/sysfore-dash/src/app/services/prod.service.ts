import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';

const BASE_URL = "https://dummyjson.com/products"

@Injectable({
  providedIn: 'root'
})
export class ProdService implements OnInit {

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
  }
  getproducts(): Observable<any> {
    return this.http.get(BASE_URL).pipe(take(6));
  }


}
