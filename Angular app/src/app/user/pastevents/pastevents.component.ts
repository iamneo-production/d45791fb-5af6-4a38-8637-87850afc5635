import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-pastevents',
  templateUrl: './pastevents.component.html',
  styleUrls: ['./pastevents.component.css']
})
export class PasteventsComponent implements OnInit{
@Input()
pastevent :any;
pasteventrecord(){
  let pastrecord:any[]=[]
  for(let i=0;i<this.pastevent.length;i++)
  {
     console.log(this.pastevent[i]);
     let currentDate: Date = new Date();
  let eventdate: Date = new Date(this.pastevent[i].date);
  if(eventdate < currentDate){
      console.log(true);
      pastrecord.push(this.pastevent[i]);
  }
  else {
    console.log(false);
  }
  }
  return pastrecord;
}
pastrecord:any[] =[]
ngOnInit(){
  this.pastrecord=this.pasteventrecord();
}
}
