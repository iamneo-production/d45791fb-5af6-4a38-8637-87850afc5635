import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from 'src/app/services/auth/auth.service';
// import { Razorpay }  from 'razorpay';


// declare var Razorpay : any
@Component({
  selector: 'app-paymentmode',
  templateUrl: './paymentmode.component.html',
  styleUrls: ['./paymentmode.component.css']
})
export class PaymentmodeComponent implements OnInit {

  @Input() activepage : any;
  @Output() pageFun = new EventEmitter<void>();


  // status
  @Input() status : any;
  @Output() cStatus = new EventEmitter<boolean>();


  constructor(private auth : AuthService, private router : Router) { }

  // Credit Tab

  credit = new FormGroup({
    creditcard : new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
    name : new FormControl('',[Validators.required]),
    exp_date : new FormControl('',[Validators.required]),
    cvv : new FormControl('',[Validators.required]),
    billingaddress : new FormControl('',[Validators.required]),
    city : new FormControl('',[Validators.required]),
    zip : new FormControl('',[Validators.required]),
    state : new FormControl('',[Validators.required]),
    country : new FormControl('',[Validators.required])
  })

  ngOnInit(): void {
  }
  
  // Tab Change Controls
  activeTab : string = "Credit";

  tabChange(value : string) {
    this.activeTab = value;
    console.log(value)
  }

  switchPay = true;

  // paySwitch

  paySwitch = (value :boolean) => {
    this.switchPay = value;
    console.log(value);
  }

  // Payment Dummy

  card = {
    creditcard : '1234567891234567',
    name : 'root',
    exp : '2002-01-23',
    cvv : '123'
  }

  // Payment Proceedings

  pageChange() {

    if(this.activeTab === "Credit") {
      console.log(this.credit.controls['creditcard']?.value,
        this.credit.controls['name']?.value,
        this.credit.controls['exp_date']?.value,
        this.credit.controls['cvv']?.value);

        let credit_details = {
          creditcard : this.credit.controls['creditcard']?.value,
          name : this.credit.controls['name']?.value,
          exp_date : this.credit.controls['exp_date']?.value,
          cvv : this.credit.controls['cvv']?.value,
          billingaddress : this.credit.controls['billingaddress']?.value,
          city : this.credit.controls['city']?.value,
          zip : this.credit.controls['zip']?.value,
          state : this.credit.controls['state']?.value,
          country : this.credit.controls['country']?.value
        }

        if(credit_details.creditcard !== null && credit_details.name !== null && credit_details.exp_date !== null && credit_details.cvv !== null &&
          credit_details.billingaddress !== null && credit_details.city !== null && credit_details.zip !== null && credit_details.state !== null
          && credit_details.country !== null ){

          // console.log(credit_details.creditcard , this.card.creditcard)
          // console.log(credit_details.name , this.card.name)
          // console.log(credit_details.exp_date , this.card.exp)
          // console.log(credit_details.cvv , this.card.cvv)

          if(credit_details.creditcard === this.card.creditcard && credit_details.name === this.card.name && 
            credit_details.exp_date === this.card.exp && credit_details.cvv === this.card.cvv) { 
              this.cStatus.emit(true);
            // console.log("yes");
          }
        }
    }
    
    this.pageFun.emit();
    // console.log("affected next")
  }


  // razor pay

  

  razorPay() {
    let options = {
      "key": "rzp_test_XNKWBECF95Os4u", // Enter the Key ID generated from the Dashboard
      "amount": "1000",
      "currency": "INR",
      "description": "Acme Corp",
      "image": "https://www.ecommerce-nation.com/wp-content/uploads/2019/02/razorpay.webp",
      "prefill":
      {
        "email": "ashwinrupak@example.com",
        "contact": +919900000000,
      },
      config: {
        display: {
          blocks: {
            utib: { //name for Axis block
              name: "Pay using Axis Bank",
              instruments: [
                {
                  method: "card",
                  issuers: ["UTIB"]
                },
                {
                  method: "netbanking",
                  banks: ["UTIB"]
                },
                {
                  method: "upi"
                }
              ]
            },
            other: { //  name for other block
              name: "Other Payment modes",
              instruments: [
                {
                  method: "card",
                  issuers: ["ICIC"]
                },
                {
                  method: 'netbanking',
                }
              ]
            }
          },
          sequence: ["block.utib", "block.other"],
          preferences: {
            show_default_blocks: false // Should Checkout show its default blocks?
          }
        }
      },
      "handler": (response : any) => {
        console.log(response.razorpay_payment_id);
        
        this.router.navigate(['report'])
        // change route
      },
      "modal": {
        "ondismiss": function () {
          if (confirm("Are you sure, you want to close the form?")) {
            let txt = "You pressed OK!";
            console.log("Checkout form closed by the user");
          } else {
            let txt = "You pressed Cancel!";
            console.log("Complete the Payment")
          }
        }
      }
    };

    let rzp1 = new this.auth.nativeWindow.Razorpay(options);
    rzp1.open();
  }


}
