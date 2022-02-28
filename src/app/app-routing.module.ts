import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MenupageComponent } from './menupage/menupage.component';
import { RestoDashComponent } from './resto-dash/resto-dash.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path:'menu',component:MenuComponent
  },
  {
   path:'menu/:id',component:MenupageComponent
  },
  {
    path:'about',component:AboutComponent
  },
  
  {
    path:'contact',component:ContactComponent
  },
  
  {

    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'contact', component: RestoDashComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
