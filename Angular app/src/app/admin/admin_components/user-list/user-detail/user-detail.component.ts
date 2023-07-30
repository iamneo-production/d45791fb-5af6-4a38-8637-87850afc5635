import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../../../admin_interfaces/a-user';
import { UserService } from '../../../admin_services/a-user.service';
import { EventService } from 'src/app/admin/admin_services/a-event.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  constructor(private route:ActivatedRoute,private us:UserService,private es:EventService){
  }
  user_id:number;
  user:user;
  events:Event[];
  ngOnInit(){
    this.route.params.subscribe(param=>{
      this.user_id=param['id'];
    });
    this.us.getUserById(this.user_id).subscribe(data=>{this.user=data;
      console.log(this.user);
      const name:string[]=this.us.splitName(this.user.name);
      this.user.f_name=name[0];
      this.user.l_name=name[1];
      if (this.user.role==="ROLE_ORGANISER")
        this.es.getEventsByOrganiserId(this.user_id).subscribe(data=>this.events=data,err=>console.log(err));
      },err=>console.log(err));
  }

}
