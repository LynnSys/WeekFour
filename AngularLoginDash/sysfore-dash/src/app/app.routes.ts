import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './Components/products/products.component';

export const routes: Routes = [
    {
        path:"dashboard",
        component: DashboardComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"",
        component: ProductsComponent
    },
    {
        path:"products",
        component: ProductsComponent
    }
    
];
