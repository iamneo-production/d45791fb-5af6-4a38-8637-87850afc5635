import { Component } from '@angular/core';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrls: ['./myevent.component.css']
})
export class MyeventComponent { 
  allevents = [
    {
      sno: 1,
      bookingId: 'B12',
      eventName: 'Birthday party',
      venue: 'Royal count',
      date: '2023-08-01',
      location: 'YSR circle',
      totalCost: 50000,
      paymentStatus: 'Paid'
    },
    {
      sno: 2,
      bookingId: 'E34',
      eventName: 'wedding',
      venue: 'YVR',
      date: '2023-06-10',
      location: 'Gandhi Road',
      totalCost: 100000,
      paymentStatus: 'Pending'
    },
    {
      sno: 3,
      bookingId: 'D12',
      eventName: 'engagement',
      venue: 'PVR palace',
      date: '2023-08-10',
      location: 'shivalayam circle',
      totalCost: 75000,
      paymentStatus: 'Paid'
    },
    // Add more upcoming bookings here...
  ];
  modifiedevent(updatedevent:any)
  {
    this.allevents=updatedevent;
    console.log(this.allevents);
  }
  activetab=" "
  tab(value:any){
    this.activetab=value;
  }
}
