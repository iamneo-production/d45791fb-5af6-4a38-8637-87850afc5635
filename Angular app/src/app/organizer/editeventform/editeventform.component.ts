import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventsService } from 'src/app/services/api/events.service';
@Component({
  selector: 'app-editeventform',
  templateUrl: './editeventform.component.html',
  styleUrls: ['./editeventform.component.css']
})
export class EditeventformComponent {
  close(){
    this.router.navigate([`organiser/${this.userId}/createvent`]);
  }
  
  event:Event;
  id:number;
  constructor(private router:Router,private es:EventsService,private route:ActivatedRoute){
  }

  ngOnInit(){
    this.id=this.route.snapshot.params["eventId"];
    this.es.getEvent(this.id).subscribe((data:Event)=>{this.event=data;console.log(data);
    },err=>console.log(err));
  }
  
  userId:number=JSON.parse(localStorage.getItem("user")).id;
  newE:boolean=false;
  default:boolean=true;

  newEvent(){
    this.default=false;
    this.newE=true;
    
    this.router.navigate([`organiser/${this.userId}/newevent`])
  }
  manageEvent(){
    this.default=false;
    this.newE=false;
    this.router.navigate([`organiser/${this.userId}/event`])
  }

  onSubmit(form:NgForm){

    this.es.updateEvent(this.id,form.value);
    
    this.router.navigate([`organiser/${this.userId}/event`])
    
  }

}
