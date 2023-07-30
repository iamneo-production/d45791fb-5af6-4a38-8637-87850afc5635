import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../admin_services/a-user.service';
import { EventService } from '../../admin_services/a-event.service';
import { TicketService } from '../../admin_services/a-ticket.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin-head-nav',
  templateUrl: './admin-head-nav.component.html',
  styleUrls: ['./admin-head-nav.component.css']
})
export class AdminHeadNavComponent {
  //current url
  currentUrl:string;

  //pages
  isDashboard:boolean=false;
  isEventListing:boolean=false;
  isUserListing:boolean=false;
  isTicketListing:boolean=false;
  isEventDetail:boolean=false;
  isUserDetail:boolean=false;
  isReport:boolean=false;

  //name
  name:string;

  constructor(private route:Router,private activatedRoute:ActivatedRoute,private auth:AuthService,private us:UserService,private es:EventService,private ts:TicketService){
    this.currentUrl=route.url;

    if(this.currentUrl==='/admin/dashboard'){
      this.name="Admin Dashboard";
      this.isDashboard=true;
    }
    else if(this.currentUrl==='/admin/manage-events'){
      this.name="List Of Events";
      this.isEventListing=true;
    }
    else if(this.currentUrl==='/admin/manage-users'){
      this.name="List Of Users";
      this.isUserListing=true;
    }
    else if(this.currentUrl==='/admin/manage-tickets'){
      this.name="List of Tickets";
      this.isTicketListing=true;
    }
    else if(this.currentUrl.includes('/admin/manage-events')&& this.activatedRoute.snapshot.paramMap.has('id')){
      this.name="Event Details";
      this.isEventDetail=true;
    }
    else if(this.currentUrl.includes('/admin/manage-users')&& this.activatedRoute.snapshot.paramMap.has('id')){
      this.name="User Details";
      this.isUserDetail=true;
    }
    else if(this.currentUrl.includes('/admin/report'))
    {this.isReport=true;this.name="Event Report";}
  }

  signOut(){
    this.us.filterUpdate.unsubscribe();
    this.ts.filteredData.unsubscribe();
    this.es.filterUpdate.unsubscribe();
    console.log('duckkk');
    this.auth.logout();
    this.route.navigate(['/admin/login'],{ queryParamsHandling: 'preserve' });
  }

}