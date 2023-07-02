import { Component } from '@angular/core';

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

}
