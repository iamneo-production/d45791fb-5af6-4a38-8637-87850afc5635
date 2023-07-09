import { Component } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.css']
})
export class UserChartComponent {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("newUser", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [1,2,3,4,5,6,7,8,9,10,11,12 ], 
	       datasets: [
          {
            label: "New Registeration per month",
            data: [11,24,45,34,55],
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
