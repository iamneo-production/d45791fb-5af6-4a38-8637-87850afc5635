import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  EventDetails : any; 
  ngOnInit(): void {

    this.EventDetails = JSON.parse(this.activatedRoute.snapshot.params["eventDetails"])
    console.log(this.EventDetails)
  }
  
  // Delete
  activeTab : string = "Credit";

  tabChange(value : string) {
    this.activeTab = value;
    console.log(value)
  }

  activeChild : string = "paymentmode"
  
  changepage() {
    this.activeChild = "ordersummary";
  }

  // for payment

  status :boolean = false

  changeStatus(value : any){
    console.log(value);
    if(value) {
      this.status = value
    }
  }
}
