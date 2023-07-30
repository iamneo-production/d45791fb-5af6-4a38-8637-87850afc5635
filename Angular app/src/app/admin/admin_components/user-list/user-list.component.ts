import { Component } from '@angular/core';
import { UserService } from '../../admin_services/a-user.service';
import { user } from '../../admin_interfaces/a-user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users:user[];
  isDeleted:boolean=false;
  constructor(private us:UserService){

  }
  ngOnInit(){
    this.us.getUsers().subscribe(data=>{this.users=data;
      this.users.forEach(user=>{
        const name:string[]=this.us.splitName(user.name);
        user.f_name=name[0];
        user.l_name=name[1];
      })
    },err=>console.log(err));
    
    this.us.filterUpdate.subscribe(data=>this.users=data);
    this.us.isDeleted.subscribe(data=>this.isDeleted=data);
  }

}
