import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { EventService } from 'src/app/admin/admin_services/a-event.service';

@Component({
  selector: 'app-event-chart',
  templateUrl: './event-chart.component.html',
  styleUrls: ['./event-chart.component.css']
})
export class EventChartComponent {

  public chart: any;
  months:number[]=Array(11).fill(0);
  constructor(private es:EventService){
    
  }

  ngOnInit(): void {
    this.createChart();
    this.es.getEvents().subscribe(data=>{data.forEach((e) => {
      const startDateObject = new Date(Date.parse(e.startDate));
      const monthNumber = startDateObject.getMonth();
      console.log(monthNumber); 
      this.months[monthNumber]++;
    });
    
  this.months.forEach((d)=>console.log(d));
    console.log("from event chart ---> "+data);
  },err=>console.log(err));
  }

  createChart(){
  
    this.chart = new Chart("newEvent", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [1,2,3,4,5,6,7,8,9,10,11,12 ], 
	       datasets: [
          {
            label: "New Registeration per month",
            data: this.months,
            backgroundColor: 'black'
          }  
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
      
    });
  }


}
