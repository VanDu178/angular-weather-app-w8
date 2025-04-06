import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component'; // Import MainLayout
import { authGuard } from './guards/auth.guard'; // 👈 import guard

export const routes: Routes = [
  { 
    path: '',
    component: MainLayoutComponent, // Sử dụng MainLayoutComponent cho các route bên trong
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },  // Điều hướng / về /home

      // Cập nhật lazy load cho các route
      { 
        path: 'home', 
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) 
      },  // Lazy load HomeComponent

      { 
        path: 'login', 
        loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
      },  // Lazy load LoginComponent

      { 
        path: 'about', 
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), 
        canActivate: [authGuard]  // Lazy load AboutComponent với guard
      } // Lazy load AboutComponent
    ]
  }
];
