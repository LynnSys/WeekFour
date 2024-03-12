import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProductsComponent } from './Components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProdService } from './services/prod.service';



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
  styleUrl: './app.component.css',
  providers: [NgbModal,ProdService]
})
export class AppComponent {
}
