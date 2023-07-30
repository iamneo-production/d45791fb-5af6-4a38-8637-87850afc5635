import { Component } from '@angular/core';
import { UserService } from 'src/app/admin/admin_services/a-user.service';

@Component({
  selector: 'app-total-user-card',
  templateUrl: './total-user-card.component.html',
  styleUrls: ['./total-user-card.component.css']
})
export class TotalUserCardComponent {

  noOfUsers:number;
  constructor(private us:UserService){
    this.us.getUsers().subscribe(data=>this.noOfUsers=data.filter((d)=>d.role!="ROLE_ADMIN").length,err=>console.log(err));
  }
  
}
