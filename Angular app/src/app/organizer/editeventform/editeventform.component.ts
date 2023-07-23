import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editeventform',
  templateUrl: './editeventform.component.html',
  styleUrls: ['./editeventform.component.css']
})
export class EditeventformComponent {
  isClose=false;
  close(){
    this.isClose=!this.isClose;
  }
  constructor(){
    
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
