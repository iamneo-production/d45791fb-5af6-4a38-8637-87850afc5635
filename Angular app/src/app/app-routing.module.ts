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
import { orgainzerGuard } from './guards/orgainzer.guard';
import { CreateventComponent } from './organizer/createvent/createvent.component';
import { OrganizerprofilepageComponent } from './organizer/organizerprofilepage/organizerprofilepage.component';
import { userGuard } from './guards/user.guard';
import { MyeventComponent } from './user/myevent/myevent.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';

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
  {
    // This path contains details about specific user
    // :id is dynamic path variable
    path: 'user/:id',
    component: UserprofileComponent,
    canActivate: [userGuard],
    children: [
      { path: '', component: NavbarComponent, outlet: 'nav' },
      // {
      //   // This path shows a particukar ticket for a particlar user
      //   path: 'tickets',
      //   component: TicketComponent,
      // },
      // {
      //   // the path loads a page
      //   // which shows details about a particular ticket based on the id
      //   path: 'tickets/:id',
      //   component: TicketComponent,
      // },
    ],
  },
  //This path loads a myevent page
  {
    path: 'user/:id/myevent',
    component: MyeventComponent,
    canActivate: [userGuard],
    children: [
      { path: '', component: NavbarComponent, outlet: 'nav' },
    ]
  },
  {
    path: 'organizer/:id/createvent',
    component: CreateventComponent,
    canActivate: [orgainzerGuard],
    children: [
      { path: '', component: NavbarComponent, outlet: 'nav' },
    ]
  },
  {
    // This path contains details about specific organiser
    // :id is dynamic path variable
    path: 'organizer/:id',
    component:OrganizerprofilepageComponent,
    canActivate: [orgainzerGuard],
    children: [
      { path: '', component: NavbarComponent, outlet: 'nav' },

      // {
        // The path opens a page where the
        // organiser can add a new event
        // path: 'createvent',
        // component: CreateventComponent,
      // },
      // {
      //   // Shows event created by user
      //   path: 'events',
      //   component: EventComponent,
      //   children: [
      //     {
      //       // Shows particular event details created by user
      //       path: ':id',
      //       component: EventComponent,
      //     },
      //   ],
      // },
      
    ],
  },
  {
    // Events path
    path: 'events-list', // for event listing
    component: EventsComponent,
    children: [
      { path: '', component: NavbarComponent, outlet: 'nav' },
      { path: '', component: FooterComponent, outlet: 'footer' },
    ],
  },

  {
    // This path shows the details for a particular event
    path: 'event-details/:id',
    component: EventDetailsComponent,
    children: [
      { path: '', component: NavbarComponent, outlet: 'nav' },
      { path: '', component: FooterComponent, outlet: 'footer' },
    ],
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
