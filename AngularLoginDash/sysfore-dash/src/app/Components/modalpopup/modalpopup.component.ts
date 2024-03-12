import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProdService } from '../../services/prod.service';

@Component({
  selector: 'app-modalpopup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modalpopup.component.html',
  styleUrl: './modalpopup.component.css',
  providers: [ProdService]
})
export class ModalpopupComponent {
  constructor(public activeModal: NgbActiveModal, private prodService: ProdService ) { }

  title:string="";
  price:string="";
  rating:string="";
  brand:string="";

  newProducts:
  {
    title:string, 
    price:string, 
    rating:string, 
    brand:string
  } = {
    title:this.title,
    price:this.price,
    rating:this.rating,
    brand:this.brand
  }

  saveDetails(){
    this.newProducts.title = this.title;
    this.newProducts.price = this.price;
    this.newProducts.rating = this.rating;
    this.newProducts.brand= this.brand;

    // this.prodService.getProdsAll().subscribe((products:any) => {
    //   // console.log(products);
    //   // console.log(products.products);
    //   //this.prods = products.products;
 
    //   this.prodService.setProds(products.products)
    //   console.log(this.prodService.prods + "api call in load fn")
    // });
  
    debugger;
    

    // console.log(this.newProducts);
    //  debugger;
    // console.log(this.prodService.getProdsAll());
     
    // this.prodService.getProds().push(this.newProducts);
    // console.log(this.prodService.prods);
  }
  
}
