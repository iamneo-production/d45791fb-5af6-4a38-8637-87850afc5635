import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { EventsService } from '../services/event-service/events.service';
import {Event} from '../models/event';
import {EventsService} from '../services/api/events.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  providers:[DatePipe]
})
export class EventDetailsComponent implements OnInit {
 
event:Event;

  constructor(private router:Router,private es:EventsService) { 
    
    console.log(this.event);
  }
  
  
  ngOnInit(): void {
    //console.log(this.router.url);
    let url = this.router.url.split('/');
    console.log(url[url.length-1]);
    let Id:number =  Number(url[url.length-1]);
    //let event= this.eventdet.getEvent(Id-1);
    let event = this.es.getEvent(Id).subscribe((data:Event)=>{
      this.event=data;
      console.log(this.event);

    },error=>console.log(error));
    
   

  }


  generateCalendarUrl(): string {
    const startDate = new Date(this.event.startDate);
    const endDate = new Date(this.event.endDate);
  
    const formattedStartDate = startDate.toISOString().replace(/-|:|\.\d+/g, '');
    const formattedEndDate = endDate.toISOString().replace(/-|:|\.\d+/g, '');
  
    const eventName = encodeURIComponent(this.event.name);
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventName}&dates=${formattedStartDate}/${formattedEndDate}`;
  
    return calendarUrl;
  }

  generateYoutubeUrl(): string{
    const youtubeUrl=`https://www.youtube.com/`;
    return youtubeUrl;
  }
  
  generateLocationUrl(): string{
    const locationNameEncoded = encodeURIComponent(this.event.location);
    const locationUrl= `https://maps.google.com/maps?q=${locationNameEncoded}`;
    return locationUrl;
  }

  
organiser_name=JSON.parse(localStorage.getItem('user')).name;

  generateMessage(): string {
    const message = `Join us for a week-long ${this.event.name} in ${this.event.location} from ${this.event.startDate} to ${this.event.endDate} .\n\nEvent Details:
    \nDuration: 2 hrs\nLocation: ${this.event.location}\nParticipants Capacity: ${this.event.totalTickets} Members\nStart Time & Date: ${this.event.startDate}\nEnd Time & Date: ${this.event.endDate}\nOrganizer: ${this.organiser_name} \nEvent ID: ${this.event.id}\n\nDon't miss this transformative journey into the world of ${this.event.name} at the ${this.event.location} from ${this.event.startDate} to ${this.event.endDate}. Register now!`;

    return message;
  }

  generateWhatsAppShareUrl(): string {
    const message = encodeURIComponent(this.generateMessage());
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;

    return whatsappUrl;
  }

  generateFacebookShareUrl(): string {
    const message = encodeURIComponent(this.generateMessage());
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${message}`;
  
    return facebookUrl;
  }

  buyTickets() : any {
    let event_details = {
      eventID:this.event.id,
      image:this.event.imgUrl,
      description:this.event.description,
      name:this.event.name,
      cost:this.event.price,
      speakerName:this.event.speakerName,
      expertise:this.event.speakerExpertise,
      affliations:this.event.speakerAffiliations,
      accomplishments:this.event.speakerAccomplishments,
      biography:this.event.speakerBiography
    }

    console.log(event_details)

    this.router.navigate(['/payment', { eventDetails : JSON.stringify(this.event)}])
  }
  
}