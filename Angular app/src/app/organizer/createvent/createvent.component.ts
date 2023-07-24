import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createvent',
  templateUrl: './createvent.component.html',
  styleUrls: ['./createvent.component.css']
})
export class CreateventComponent {
 

    constructor(private router:Router){}

    userId:number=JSON.parse(localStorage.getItem("user")).id;

    newEvent(){
      this.router.navigate([`organiser/${this.userId}/newevent`])

    }
    manageEvent(){
      this.router.navigate([`organiser/${this.userId}/event`])
    }
}

