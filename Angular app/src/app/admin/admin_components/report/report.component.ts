import { Component, OnInit } from '@angular/core';
import { ChartConfiguration ,ChartOptions} from 'chart.js';
import { MatTableDataSource } from '@angular/material/table';
import { EventService } from '../../admin_services/a-event.service';
import { ActivatedRoute } from '@angular/router';
import { event } from '../../admin_interfaces/a-event';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  event_id:number;
  event_data:event;
  eventDetails = {
    name : 'event name',
    description : "Everyone must enjoy their lives",
    startDate : "01-22-2022",
    endDate : "02-22-2022",
    location : "Hyderabad",
    organised_by : "Mr. Akshay",
    amount : 250,
    capacity : 15,
    attendee_id : ['evidoldrke001','evidnvjia0001','evidjy7h4g001','evid79rjhd001',
                    'evidqo3j04001','evid19bm01001','evid8fbw6j001','evidxb7zls001',
                    'evidsrukfk001','evid5edprt001']
  }
  constructor(private es:EventService,private route:ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(param=>{
      this.event_id=param['id'];
      this.es.getEventById(this.event_id).subscribe(data=>{
        console.log("event based on id is :"+data.name);
        this.event_data= data;
      },error=>console.log(error));
    });

    this.eventDetails = {
      name : this.event_data.name,
      description : this.event_data.description,
      startDate : this.event_data.startDate,
      endDate : this.event_data.endDate,
      location : this.event_data.location,
      organised_by : this.event_data.organizer.name,
      amount : this.event_data.price,
      capacity : this.event_data.totalTickets,
      attendee_id : ['evidoldrke001','evidnvjia0001','evidjy7h4g001','evid79rjhd001',
                      'evidqo3j04001','evid19bm01001','evid8fbw6j001','evidxb7zls001',
                      'evidsrukfk001','evid5edprt001']
    }
  }
  
  public barChartLegend = true;
  public barChartPlugins = [];

  
// Me Generated

  

  attendees_list = [
    {
      id : 'evidoldrke001',name : "A",age : 23,registeredDate : '01-23-2022', gender: 'M'
    },
    {
      id : 'evidnvjia0001',name : "B",age : 25,registeredDate : '02-02-2022', gender: 'F'
    },
    {
      id : 'evidjy7h4g001',name : "C",age : 32,registeredDate : '01-23-2022', gender: 'M'
    },
    {
      id : 'evidqo3j04001',name : "D",age : 29,registeredDate : '02-19-2022',  gender: 'F'
    },
    {
      id : 'evid5edprt001',name : "X",age : 21,registeredDate : '01-23-2022', gender: 'M'
    },
    {
      id : 'evid79rjhd001',name : "E",age : 41,registeredDate : '01-26-2022',  gender: 'F'
    },
    {
      id : 'evidsrukfk001',name : "Z",age : 22,registeredDate : '01-29-2022', gender: 'F'
    },
    {
      id : 'evidxb7zls001',name : "H",age : 21,registeredDate : '02-13-2022', gender: 'M'
    },
    {
      id : 'evid8fbw6j001',name : "X",age : 32,registeredDate : '02-02-2022', gender: 'F'
    },
    {
      id : 'evid19bm01001',name : "G",age : 25,registeredDate : '02-02-2022', gender: 'M'
    },
    
  ]

  dataSource : any = new MatTableDataSource(this.attendees_list);

  displayedColumns: string[] = ['id','name', 'age', 'registeredDate' ,'gender'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // Chart 1 Data

  label_participants =  [ 'Estimated', 'Registered', 'Remaining' ]
  data_participants = [ this.eventDetails.capacity , this.eventDetails.attendee_id.length , ( this.eventDetails.capacity - this.eventDetails.attendee_id.length) ]

  public barChartDataParticipants: ChartConfiguration<'bar'>['data'] = {
    labels: this.label_participants,
    datasets: [
      { data: this.data_participants, label: 'Participants' },
    ]
  };

  // Chart 2 Data

  label_amount =  [ 'Total', 'Actual', 'Remaining' ]
  data_amount = [ this.eventDetails.capacity * this.eventDetails.amount , 
    this.eventDetails.attendee_id.length * this.eventDetails.amount , 
    ( (this.eventDetails.capacity * this.eventDetails.amount) - (this.eventDetails.attendee_id.length * this.eventDetails.amount)) ]

  public barChartDataAmount: ChartConfiguration<'bar'>['data'] = {
    labels: this.label_amount,
    datasets: [
      { data: this.data_amount, label: 'Amount' },
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    backgroundColor : "#0048bd",
    indexAxis: 'y'
  };

  // Line Chart

  dateGetter() {
    let dateLabels : any = {}
    
    let answer = this.attendees_list.sort((a : any, b: any) => {
      if(new Date(a.registeredDate) < new Date(b.registeredDate)) {
        return -1;
      }
      if(new Date(a.registeredDate) > new Date(b.registeredDate)) {
        return 1;
      }
      return 0;
    })


    let length = answer.length
    for(let i=0;i<length;i++) {
      // startDate if not present in attendeelist
      if(i==0) {
        if(this.eventDetails.startDate !== answer[0].registeredDate) {
          dateLabels[this.eventDetails.startDate] = 0;
        }
      }

      // console.log(this.attendees_list[i].registeredDate);
      if(dateLabels[answer[i].registeredDate] === undefined) {
        dateLabels[answer[i].registeredDate] = 1;
      }
      else {
        dateLabels[answer[i].registeredDate] += 1;
      }

      // endDate if not present in attendeelist
      if(i==length-1) {
        if(this.eventDetails.endDate !== answer[length-1].registeredDate) {
          dateLabels[this.eventDetails.endDate] = 0;
        }
      }
    }
    
    
    console.log(answer)
    return dateLabels
  }

  date_label_value = this.dateGetter();
  date_label = Object.keys(this.date_label_value);
  date_value = Object.values(this.date_label_value);

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: Object.keys(this.date_label_value),
    datasets: [
      {
        data: Object.values(this.date_label_value),
        label: 'User count',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
        
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;


  // Pie Chart


  // gender
  genderGetter() {
    let genderLabels : any = {}

    for(let i=0;i<this.attendees_list.length;i++) {
      // console.log(this.attendees_list[i].registeredDate);
      if(genderLabels[this.attendees_list[i].gender] === undefined) {
        genderLabels[this.attendees_list[i].gender] = 1;
      }
      else {
        genderLabels[this.attendees_list[i].gender] += 1;
      }
    }
    return genderLabels
  }

  gender_label_value = this.genderGetter();
  gender_label = Object.keys(this.gender_label_value);
  gender_value = Object.values(this.gender_label_value);
  
  ageGetter() {
    let ageLabels : any = {}

    for(let i=0;i<this.attendees_list.length;i++) {
      // console.log(this.attendees_list[i].registeredDate);
      if(ageLabels[this.attendees_list[i].age] === undefined) {
        ageLabels[this.attendees_list[i].age] = 1;
      }
      else {
        ageLabels[this.attendees_list[i].age] += 1;
      }
    }
    return ageLabels
  }

  age_label_value = this.ageGetter();
  age_label = Object.keys(this.age_label_value);
  age_value = Object.values(this.age_label_value);

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };

  // gender

  public pieChartGenderLabels = this.gender_label;
  public pieChartGenderDatasets = [ {
    data: this.gender_value
  } ];

  // age

  public pieChartAgeLabels = this.age_label;
  public pieChartAgeDatasets = [ {
    data: this.age_value
  } ];



  public pieChartLegend = true;
  public pieChartPlugins = [];
}
