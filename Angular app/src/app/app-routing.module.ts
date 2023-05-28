import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { EventsComponent } from './events/events.component';
import { UserComponent } from './user/user.component';
import { OrganiserComponent } from './organiser/organiser.component';
import { AdminComponent } from './admin/admin.component';
import { EventComponent } from './events/event/event.component';
import { TicketComponent } from './user/ticket/ticket.component';
import { AddEventComponent } from './organiser/add-event/add-event.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { TicketsComponent } from './user/tickets/tickets.component';

const routes: Routes = [
  {
    //The initial page that renders when someone visits the root url
    path: '',
    component: LandingComponent,
  },
  {
    path: 'admin/login',
    component: AdminLoginComponent,
  },
  {
    //Authentication path if user/organiser if already registered
    path: 'login',
    component: LoginComponent,
  },
  {
    //Authentication path if user/organiser if new
    path: 'signup',
    component: SignupComponent,
  },
  {
    // Events path
    path: 'events',
    component: EventsComponent,
  },
  {
    // This path shows the details for a particular event
    path: 'events/:id',
    component: EventComponent,
  },
  {
    // This path contains details about specific user
    // :id is dynamic path variable
    path: 'user/:id',
    component: UserComponent,
    children: [
      {
        // This path shows a particukar ticket for a particlar user
        path: 'tickets',
        component: TicketsComponent,
      },
      {
        // the path loads a page
        // which shows details about a particular ticket based on the id
        path: 'tickets/:id',
        component: TicketComponent,
      },
    ],
  },
  {
    // This path contains details about specific organiser
    // :id is dynamic path variable
    path: 'organiser/:id',
    component: OrganiserComponent,
    children: [
      {
        // The path opens a page where the
        // organiser can add a new event
        path: 'add',
        component: AddEventComponent,
      },
      {
        // Shows event created by user
        path: 'events',
        component: EventComponent,
        children: [
          {
            // Shows particular event details created by user
            path: ':id',
            component: EventComponent,
          },
        ],
      },
    ],
  },
  {
    // The path opens portal for admin
    path: 'admin/:id',
    component: AdminComponent,
    children: [
      {
        // Shows all the events listed
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'events/:id',
        component: EventComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
