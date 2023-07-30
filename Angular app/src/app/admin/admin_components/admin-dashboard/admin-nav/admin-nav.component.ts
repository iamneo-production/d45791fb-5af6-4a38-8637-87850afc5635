import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {

  constructor(private router:Router){

  }

  gotoUserList(){
    this.router.navigate(['admin/manage-users']);
  }
  gotoEventList(){
    this.router.navigate(['admin/manage-events']);
  }
  gotoTickets(){
    this.router.navigate(['admin/manage-tickets']);
  }
  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

}
