import { Component, Input, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {

  @Input() status : boolean | null = null;
  @Input() eventDetails : any;

  currentDate : Date = new Date();
  invoice_number1 = (Math.random() * 10).toPrecision(4);
  invoice_number2 = (Math.random() * 10).toPrecision(4);
  commission : number = 2.00;

  constructor() { 
  }
  options : AnimationOptions | null = null;
  ngOnInit(): void {
    console.log(this.eventDetails)
    this.options = {
      path: this.status ? '/assets/json/success.json' : '/assets/json/failure.json' ,
    };
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
