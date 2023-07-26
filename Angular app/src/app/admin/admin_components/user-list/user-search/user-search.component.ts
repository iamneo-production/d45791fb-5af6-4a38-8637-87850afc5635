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
    this.us.getUsers().subscribe(data=>{this.users= data.filter(data=>data.name.includes(this.search_term));                                    
                            this.users.forEach(user=>{
                            const name:string[]=this.us.splitName(user.name);
                            user.f_name=name[0];
                            user.l_name=name[1];
                          })
                        },err=>console.log(err));
    this.us.filterUpdate.next(this.users);
  }
}