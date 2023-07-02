import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../services/event-service/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public name = "Cybersecurity Symposium";
  public duration = "2 hrs";
  public location = "Ground and Mezzanine floor, Bangalore, Karnataka";
  public participantsCapacity = "100 Members";
  public startTimeDate = "6 pm - 9/06/2023";
  public endTimeDate = "8 pm - 14/06/2023";
  public organizer = "Shafin";
  public eventID = "213568";
  public image = ""
  public description = "Hi this is speaker"

  cost = "100";
  public speakerName="";
  public expertise="";
  public affliations="";
  public accomplishments="";
  public biography="";


  startTime: string = '6 pm - 9/06/2023';
  endTime: string = '8 pm - 14/06/2023';
  locationName: string = 'Ground and Mezzanine floor, Bangalore, Karnataka';

 


  constructor(private router:Router, private eventdet:EventsService) { }

  ngOnInit(): void {
    //console.log(this.router.url);
    let url = this.router.url.split('/');
    console.log(url[url.length-1]);
    let Id:number =  Number(url[url.length-1]);
    let event= this.eventdet.getEvent(Id-1);
    console.log(event);
    this.eventID=event.id;
    this.image=event.image;
    this.description=event.description;
    this.name=event.name;
    this.cost=event.amount;
    this.speakerName=event.speakerName;
    this.expertise=event.expertise;
    this.affliations=event.affiliations;
    this.accomplishments=event.accomplishments;
    this.biography=event.biography;

  }


  generateCalendarUrl(): string {
    const startDate = new Date('2023-06-09T18:00:00+05:30');
    const endDate = new Date('2023-06-09T20:00:00+05:30');
  
    const formattedStartDate = startDate.toISOString().replace(/-|:|\.\d+/g, '');
    const formattedEndDate = endDate.toISOString().replace(/-|:|\.\d+/g, '');
  
    const eventName = encodeURIComponent('Cybersecurity Symposium');
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventName}&dates=${formattedStartDate}/${formattedEndDate}`;
  
    return calendarUrl;
  }

  generateYoutubeUrl(): string{
    const youtubeUrl=`https://www.youtube.com/`;
    return youtubeUrl;
  }
  
  generateLocationUrl(): string{
    const locationNameEncoded = encodeURIComponent(this.locationName);
    const locationUrl= `https://maps.google.com/maps?q=${locationNameEncoded}`;
    return locationUrl;
  }

  generateMessage(): string {
    const message = `Join us for a week-long Cybersecurity symposium in Bangalore from June 9th to June 15th, 2023.\n\nEvent Details:\nDuration: 2 hrs\nLocation: ${this.locationName}\nParticipants Capacity: 100 Members\nStart Time & Date: ${this.startTime}\nEnd Time & Date: ${this.endTime}\nOrganizer: ${this.organizer}\nEvent ID: ${this.eventID}\n\nDon't miss this transformative journey into the world of cybersecurity at the Bangalore symposium from June 9th to June 15th, 2023. Register now!`;

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
      eventID:this.eventID,
      image:this.image,
      description:this.description,
      name:this.name,
      cost:this.cost,
      speakerName:this.speakerName,
      expertise:this.expertise,
      affliations:this.affliations,
      accomplishments:this.accomplishments,
      biography:this.biography
    }

    console.log(event_details)

    this.router.navigate(['/payment', { eventDetails : JSON.stringify(event_details)}])
  }
  
}