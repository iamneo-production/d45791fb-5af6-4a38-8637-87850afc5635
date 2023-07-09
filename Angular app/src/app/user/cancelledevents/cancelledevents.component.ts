import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-cancelledevents',
  templateUrl: './cancelledevents.component.html',
  styleUrls: ['./cancelledevents.component.css']
})
export class CancelledeventsComponent {
  @Input()
  cancelledevent:any;


}
