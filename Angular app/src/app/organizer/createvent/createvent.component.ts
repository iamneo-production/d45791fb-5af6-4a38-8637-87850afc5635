import { Component } from '@angular/core';

@Component({
  selector: 'app-createvent',
  templateUrl: './createvent.component.html',
  styleUrls: ['./createvent.component.css']
})
export class CreateventComponent {
  newE:boolean=false;
  manageE:boolean=false;
  default:boolean=true;



  newEvent(){
    this.default=false;
    this.newE=true;
    this.manageE=false;

  }
  manageEvent(){
    this.default=false;
    this.newE=false;
    this.manageE=true;

  }

}
