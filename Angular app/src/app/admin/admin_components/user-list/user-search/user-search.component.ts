import { Component } from '@angular/core';
import { user } from '../../../admin_interfaces/a-user';
import { UserService } from '../../../admin_services/a-user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  users:user[];
  search_term:string;
  constructor(private us:UserService){
  }

  search(){
    console.log('search started '+this.search_term);
    
    this.users=this.us.getUsers().filter(data=>data.first_name.includes(this.search_term));
    console.log(this.users);
    
    this.us.filterUpdate.next(this.users);
  }
}