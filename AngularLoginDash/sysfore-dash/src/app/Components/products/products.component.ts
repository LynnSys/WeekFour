import { Component, OnInit, inject } from '@angular/core';
import { ProdService } from '../../services/prod.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProdService]
})
export class ProductsComponent implements OnInit{

  constructor(private prodService:ProdService){}
  // prods:any[]=[]
  prods:any[] | undefined;

  ngOnInit(): void {
    // this.fetchProds();
    this.loadPosts();
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
    this.prodService.getProds()
    .subscribe((products:any) => {
      console.log(products);
      console.log(products.products);
      this.prods = products.products;
    });
  }
}
