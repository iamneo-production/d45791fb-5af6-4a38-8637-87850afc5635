import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './about-us_page/about-us/about-us.component';
import { HomeComponent } from './landing_page/home/home.component';
import { ServiceCardComponent } from './landing_page/service-card/service-card.component';
import { SliderComponent } from './landing_page/slider/slider.component';

import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { CreateventComponent } from './organizer/createvent/createvent.component';
import { EditeventformComponent } from './organizer/editeventform/editeventform.component';
import { EventdisplayComponent } from './organizer/eventdisplay/eventdisplay.component';
import { NeweventformComponent } from './organizer/neweventform/neweventform.component';
import { OrganizerprofilepageComponent } from './organizer/organizerprofilepage/organizerprofilepage.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { MyeventComponent } from './user/myevent/myevent.component';
import { UpcomingeventsComponent } from './user/upcomingevents/upcomingevents.component';
import { PasteventsComponent } from './user/pastevents/pastevents.component';
import { CancelledeventsComponent } from './user/cancelledevents/cancelledevents.component';
import { EventsComponent } from './events/events.component';
import { ListSearchComponent } from './list-search/list-search.component';
import { EventsService } from './services/event-service/events.service';
import { MatIconModule } from '@angular/material/icon';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SpeakerDetailsComponent } from './event-details/speaker-details/speaker-details.component';
import { SearchAlleventsComponent } from './search-allevents/search-allevents.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    ServiceCardComponent,
    SliderComponent,
    RegisterComponent,
    LoginComponent,
    CreateventComponent,
    EditeventformComponent,
    EventdisplayComponent,
    NeweventformComponent,
    OrganizerprofilepageComponent,
    UserprofileComponent,
    MyeventComponent,
    UpcomingeventsComponent,
    PasteventsComponent,
    CancelledeventsComponent,
    EventsComponent,
    ListSearchComponent,
    EventDetailsComponent,
    SpeakerDetailsComponent,
    SearchAlleventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
