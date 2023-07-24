import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../../../admin_interfaces/a-user';

@Component({
  selector: 'app-a-user',
  templateUrl: './a-user.component.html',
  styleUrls: ['./a-user.component.css']
})
export class AUserComponent {

  @Input() user:user;
  constructor(private router:Router){

  }
  gotoUserDetails(){
    this.router.navigate(['admin/manage-users',this.user.user_id]);
  }
}
