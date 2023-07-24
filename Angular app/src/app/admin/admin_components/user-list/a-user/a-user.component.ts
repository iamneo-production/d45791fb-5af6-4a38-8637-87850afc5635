import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../../../admin_interfaces/a-user';
import { UserService } from 'src/app/admin/admin_services/a-user.service';

@Component({
  selector: 'app-a-user',
  templateUrl: './a-user.component.html',
  styleUrls: ['./a-user.component.css']
})
export class AUserComponent {

  @Input() user:user;
  constructor(private router:Router,private us:UserService){
  }
  
  gotoUserDetails(){
    this.router.navigate(['admin/manage-users',this.user.id]);
  }

  deleteUser(){
    this.us.deleteUser(this.user.id).subscribe(data=>{
      console.log(data);
      this.us.getUsers().subscribe(data=>{this.us.filterUpdate.next(data);this.us.isDeleted.next(true);setInterval(()=>this.us.isDeleted.next(false),2000)});
    })
  }
}
