import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddRestaurantComponent } from './pages/add-restaurant/add-restaurant.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'partner-with-us',
    component: AddRestaurantComponent
  },
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
