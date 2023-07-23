import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from 'src/app/models/event';
import { EventsService } from 'src/app/services/api/events.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-neweventform',
  templateUrl: './neweventform.component.html',
  styleUrls: ['./neweventform.component.css']
})
export class NeweventformComponent implements OnInit{
  event: any = {};
  organiser_info:any;
  organiser:number;
  constructor(private es:EventsService,private router:Router) {
  }

  ngOnInit(): void {
    this.organiser_info=JSON.parse(localStorage.getItem('user'));
    console.log(this.organiser_info.id);     
  }

  addEvent(form: any) {
    console.log(form.value);

    this.es.addEvent(form.value);
    

    this.router.navigate(['event'])
  }

  newE:boolean=false;
  default:boolean=true;

  newEvent(){
    this.default=false;
    this.newE=true;

  }
  manageEvent(){
    this.default=false;
    this.newE=false;
}
}
