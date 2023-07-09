import { Component } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-revenue-chart',
  templateUrl: './revenue-chart.component.html',
  styleUrls: ['./revenue-chart.component.css']
})
export class RevenueChartComponent {

  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("revenue", {
      type: 'line',

      data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12], 
	       datasets: [
          {
            label: "Revenue earned for the month of year 2023",
            data: [12000,20000,15000,53000,44000],
            backgroundColor: 'blue'
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
