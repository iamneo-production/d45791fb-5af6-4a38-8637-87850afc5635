import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../../../admin_interfaces/a-user';
import { UserService } from '../../../admin_services/a-user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  constructor(private route:ActivatedRoute,private us:UserService){
  }
  user_id:number;
  user:user;
  ngOnInit(){
    this.route.params.subscribe(param=>{
      this.user_id=param['id'];
    });
    this.user=this.us.getUserById(this.user_id);
    console.log(this.user);
  }

}
