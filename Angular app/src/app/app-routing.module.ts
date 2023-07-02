import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us_page/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './landing_page/home/home.component';
import { ServiceCardComponent } from './landing_page/service-card/service-card.component';
import { SliderComponent } from './landing_page/slider/slider.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
