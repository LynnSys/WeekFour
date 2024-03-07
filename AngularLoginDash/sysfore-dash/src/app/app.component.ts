import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProductsComponent } from './Components/products/products.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    LoginComponent,
    DashboardComponent,
    ProductsComponent,
    HttpClientModule
  ],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
