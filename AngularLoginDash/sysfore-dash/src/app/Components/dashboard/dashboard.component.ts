import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    LoginComponent,
    ProductsComponent
  ] ,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
