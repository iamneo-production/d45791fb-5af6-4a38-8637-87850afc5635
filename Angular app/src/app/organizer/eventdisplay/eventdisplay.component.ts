import { Component } from '@angular/core';

@Component({
  selector: 'app-eventdisplay',
  templateUrl: './eventdisplay.component.html',
  styleUrls: ['./eventdisplay.component.css']
})
export class EventdisplayComponent {
  isEdit = false;
  edit() {
    this.isEdit = true;
  }

}
