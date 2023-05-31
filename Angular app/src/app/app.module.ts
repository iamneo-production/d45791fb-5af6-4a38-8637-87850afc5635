import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './user/user.component';
import { OrganiserComponent } from './organiser/organiser.component';
import { AdminComponent } from './admin/admin.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { TicketsComponent } from './user/tickets/tickets.component';
import { TicketComponent } from './user/ticket/ticket.component';
import { AddEventComponent } from './organiser/add-event/add-event.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './services/api/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UserComponent,
    OrganiserComponent,
    AdminComponent,
    EventsComponent,
    EventComponent,
    TicketsComponent,
    TicketComponent,
    AddEventComponent,
    LoginComponent,
    SignupComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // for testing purposes
    // a in memeory fake backend is used
    HttpClientInMemoryWebApiModule.forRoot(BackendService, {
      delay: 0,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
