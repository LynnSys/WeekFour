import { Component, OnInit, inject } from '@angular/core';
import { ProdService } from '../../services/prod.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalpopupComponent } from '../modalpopup/modalpopup.component';
import { EditproductComponent } from '../editproduct/editproduct.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ModalpopupComponent, EditproductComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProdService]
})
export class ProductsComponent implements OnInit{

  constructor(private prodService: ProdService) {
    
  }
  products: any[] = [];
  public editingIndex = -1;
  newproduct:any = { };

  ngOnInit(): void {
    this.loadproducts();

  }

  loadproducts() {
    this.prodService.getproducts().subscribe({
      next: (products: any) => {
        this.products = products.products;
        console.log('Fetched');
      },
      error: (error) => console.log('There is an error', error),
    });
  }

  productsmodalopen() {
    document.getElementById('myModal')?.setAttribute('style', 'display: block');
    console.log('popup');
  }

  productsmodalclose() {
    document.getElementById('myModal')?.setAttribute('style', 'display: none');
    console.log('popup');
  }


  editProduct(index: number): void {
    this.newproduct = { ...this.products[index] };
    this.editingIndex = index;
    this.productsmodalopen();
  }
  
  addProduct(): void {

    if (this.editingIndex > -1) {
      // Update existing product
      this.products[this.editingIndex] = { ...this.newproduct };
      this.editingIndex = -1;
    } else {
      // Add new product
      if (this.products.length > 0) {
        this.newproduct.id = this.products[this.products.length - 1].id;
      } else {
        this.newproduct.id = 1;
      }
  
      this.products.push({ ...this.newproduct });
    }
    this.productsmodalclose();
    this.resetForm();
  }

  
  resetForm(): void {
    this.newproduct = {
      id: '',
      title: '',
      price: '',
      rating: '',
      brand: '',
    };
    this.editingIndex = -1;
  }

    deleteProduct(index: number): void {
      this.products.splice(index, 1);
    }
  }