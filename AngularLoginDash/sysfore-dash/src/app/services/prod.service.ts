import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

const BASE_URL = "https://dummyjson.com/products"

@Injectable({
  providedIn: 'root'
})
export class ProdService implements OnInit {

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
  }
  prods:any[] =[];
  
  getProdsAll(){
    return this.http.get<any[]>(BASE_URL)
  }
  setProds(info:any[]){
     this.prods = info;
     console.log(this.prods + "setting the value")
  }

  getProds():any[]{
    // console.log("getprods()")
    return this.prods;
    }
  // pushProds(info:any){
  //   this.prods.push(info);
  //   console.log(this.prods);
  // }

}
