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
  constructor(private us:UserService){

  }
  ngOnInit(){
    this.users=this.us.getUsers();
    this.us.filterUpdate.subscribe(data=>this.users=data);
  }

}
