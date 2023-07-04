import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { AdminDashboardComponent } from './admin/admin_components/admin-dashboard/admin-dashboard.component';
import { AdminNavComponent } from './admin/admin_components/admin-dashboard/admin-nav/admin-nav.component';
import { MainPanelComponent } from './admin/admin_components/admin-dashboard/main-panel/main-panel.component';
import { CardsComponent } from './admin/admin_components/admin-dashboard/main-panel/cards/cards.component';
import { NumberOfTicketsCardComponent } from './admin/admin_components/admin-dashboard/main-panel/cards/number-of-tickets-card/number-of-tickets-card.component';
import { TotalEventCardComponent } from './admin/admin_components/admin-dashboard/main-panel/cards/total-event-card/total-event-card.component';
import { TotalUserCardComponent } from './admin/admin_components/admin-dashboard/main-panel/cards/total-user-card/total-user-card.component';
import { RecentComponent } from './admin/admin_components/admin-dashboard/main-panel/recent/recent.component';
import { RevenueChartComponent } from './admin/admin_components/admin-dashboard/main-panel/revenue-chart/revenue-chart.component';
import { UserChartComponent } from './admin/admin_components/admin-dashboard/main-panel/user-chart/user-chart.component';
import { AdminHeadNavComponent } from './admin/admin_components/admin-head-nav/admin-head-nav.component';
import { EventListingComponent } from './admin/admin_components/event-listing/event-listing.component';
import { AEventDetailComponent } from './admin/admin_components/event-listing/a-event-detail/a-event-detail.component';
import { AEventsComponent } from './admin/admin_components/event-listing/a-events/a-events.component';
import { FilterByDateComponent } from './admin/admin_components/event-listing/filter-by-date/filter-by-date.component';
import { SearchEventComponent } from './admin/admin_components/event-listing/search-event/search-event.component';
import { ReportComponent } from './admin/admin_components/report/report.component';
import { TicketComponent } from './admin/admin_components/ticket/ticket.component';
import { TicketListComponent } from './admin/admin_components/ticket/ticket-list/ticket-list.component';
import { TicketNavComponent } from './admin/admin_components/ticket/ticket-nav/ticket-nav.component';
import { TicketDateFilterComponent } from './admin/admin_components/ticket/ticket-nav/ticket-date-filter/ticket-date-filter.component';
import { TicketSearchComponent } from './admin/admin_components/ticket/ticket-nav/ticket-search/ticket-search.component';
import { UserListComponent } from './admin/admin_components/user-list/user-list.component';
import { AUserComponent } from './admin/admin_components/user-list/a-user/a-user.component';
import { UserDetailComponent } from './admin/admin_components/user-list/user-detail/user-detail.component';
import { UserRoleFilterComponent } from './admin/admin_components/user-list/user-role-filter/user-role-filter.component';
import { UserSearchComponent } from './admin/admin_components/user-list/user-search/user-search.component';
import { EventsComponent } from './events/events.component';
import { ListSearchComponent } from './list-search/list-search.component';
import { EventsService } from './services/event-service/events.service';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { EventService } from './admin/admin_services/a-event.service';
import { TicketService } from './admin/admin_services/a-ticket.service';
import { UserService } from './admin/admin_services/a-user.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SpeakerDetailsComponent } from './event-details/speaker-details/speaker-details.component';
import { SearchAlleventsComponent } from './search-allevents/search-allevents.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { OrdersummaryComponent } from './paymentpage/ordersummary/ordersummary.component';
import { PaymentmodeComponent } from './paymentpage/paymentmode/paymentmode.component';
import { LottieModule } from 'ngx-lottie';
import { CommonModule } from '@angular/common';
import { AdminAuthService } from './admin/admin_services/a-auth.service';
import { AdminGuard } from './admin/admin_services/admin-guard/admin-guard.service';

// player-factory
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

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
    AdminDashboardComponent,
    AdminNavComponent,
    MainPanelComponent,
    CardsComponent,
    NumberOfTicketsCardComponent,
    TotalEventCardComponent,
    TotalUserCardComponent,
    RecentComponent,
    RevenueChartComponent,
    UserChartComponent,
    AdminHeadNavComponent,
    EventListingComponent,
    AEventDetailComponent,
    AEventsComponent,
    FilterByDateComponent,
    SearchEventComponent,
    ReportComponent,
    TicketComponent,
    TicketListComponent,
    TicketNavComponent,
    TicketDateFilterComponent,
    TicketSearchComponent,
    UserListComponent,
    AUserComponent,
    UserDetailComponent,
    UserRoleFilterComponent,
    UserSearchComponent,
    EventsComponent,
    ListSearchComponent,
    EventDetailsComponent,
    SpeakerDetailsComponent,
    SearchAlleventsComponent,
    PaymentpageComponent,
    OrdersummaryComponent,
    PaymentmodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
    LottieModule,
    LottieModule.forRoot({ player: playerFactory }),
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],	
  providers: [EventsService,EventService,TicketService,UserService,AdminAuthService,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
