import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us_page/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './landing_page/home/home.component';
import { ServiceCardComponent } from './landing_page/service-card/service-card.component';
import { SliderComponent } from './landing_page/slider/slider.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    //The initial page that renders when someone visits the root url
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: NavbarComponent, outlet: 'nav' },
      { path: '', component: SliderComponent, outlet: 'slider' },
      { path: '', component: ServiceCardComponent, outlet: 'serviceCard' },
      
      { path: '', component: FooterComponent, outlet: 'footer' },
    ],
  },
  {
    path: 'about',
    component: AboutUsComponent,
    children: [
      { path: '', component: NavbarComponent, outlet: 'nav' },
      { path: '', component: FooterComponent, outlet: 'footer' },
    ],
  },
  {
    //Authentication path if user has already registered
    path: 'user-login', // for user login
    component: LoginComponent,
  },
  {
    //Authentication path if organiser has already registered
    path: 'organiser-login', // for organiser login
    component: LoginComponent,
  },
  {
    //Authentication path if user is new
    path: 'user-register', // for user registration
    component: RegisterComponent,
  },
  {
    //Authentication path if organiser has already registered
    path: 'organiser-register', // for organiser login
    component: RegisterComponent,
  },
  {
    path: 'categories',
    component: ServiceCardComponent,
    children: [
      { path: '', component: NavbarComponent, outlet: 'nav' },
      { path: '', component: FooterComponent, outlet: 'footer' },
    ],
  },
  {
    //Authentication path if organiser is new
    path: 'organiser-register', // for organiser registration
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
