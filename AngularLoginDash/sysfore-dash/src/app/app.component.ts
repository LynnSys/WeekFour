import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    LoginComponent,
    DashboardComponent
  ],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
