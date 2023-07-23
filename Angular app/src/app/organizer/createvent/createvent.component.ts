import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createvent',
  templateUrl: './createvent.component.html',
  styleUrls: ['./createvent.component.css']
})
export class CreateventComponent {
 

    constructor(private router:Router){}

    newE:boolean=false;
    default:boolean=true;


    newEvent(){
      this.default=false;
      this.newE=true;
      this.router.navigate(["/newevent"])

    }
    manageEvent(){
      this.default=false;
      this.newE=false;
      this.router.navigate(["/event"])

    }
}

