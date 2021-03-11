import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/pages/users/login/login.component";
import {RegisterComponent} from "./components/pages/users/register/register.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {AdminComponent} from "./components/admin/admin.component";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'users',
    component:LayoutComponent,
    loadChildren: () => import('./modules/layout.module').then(module => module.LayoutModule)
  },  {
    path: 'admin',
    component:AdminComponent,
    loadChildren: () => import('./modules/admin.module').then(module => module.AdminModule)
  },
  {
    path: '',
    component:LayoutComponent,
    loadChildren: () => import('./modules/layout.module').then(module => module.LayoutModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
