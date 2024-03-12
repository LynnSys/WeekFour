import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProductsComponent } from './Components/products/products.component';
import { LoginComponent } from './Components/login/login.component';
import { ModalpopupComponent } from './Components/modalpopup/modalpopup.component';

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
