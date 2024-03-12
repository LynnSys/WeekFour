import { Component, OnInit, inject } from '@angular/core';
import { ProdService } from '../../services/prod.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalpopupComponent } from '../modalpopup/modalpopup.component';
import { EditproductComponent } from '../editproduct/editproduct.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ModalpopupComponent, EditproductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProdService]
})
export class ProductsComponent implements OnInit{

  constructor(public prodService:ProdService, public modalService: NgbModal){}
  //prods:any[]=[]
  // prods:any[]=[];
  productArray : any[]=[]
  ngOnInit(): void {
    // this.fetchProds();
    this.loadPosts();
  }

  modalPopUp(){
    this.modalService.open(ModalpopupComponent)
  }

  //   this.http.get("https://dummyjson.com/products")
  //   .subscribe((products:any) => {
  //     console.log(products)
  //     console.log(products.products);
  //     this.prods=products.products;
  //     // this.prods = products;
  //     // console.log(this.prods.products);
  //     // console.log(typeof(this.prods.products))
  //   });
  // }

//   fetchProds(){
//     this.http.get("https://dummyjson.com/products")
//     .subscribe((products:any) => {
//       console.log(products)
//       console.log(products.products);
//       this.prods=products.products;
//     });
//   }
// }

  loadPosts(){
    this.prodService.getProdsAll().subscribe((products:any) => {
      // console.log(products);
      // console.log(products.products);
      //this.prods = products.products;

      this.prodService.setProds(products.products)
     
      console.log(this.prodService.prods + "api call in load fn")
    });
  }
  editProduct(product: any) {
    this.modalService.open(EditproductComponent)
  }

  
  // deleteProduct(productId: number) {
  //   const index = this.prods.findIndex((item:{id:number;}) =>
  //   item.id==productId);
  //   if(index !== -1){
  //     this.prods.splice(index,1);
  //     console.log("deleted");
  //   }
    
  }