import { Component } from '@angular/core';
import { user } from '../../../admin_interfaces/a-user';
import { UserService } from '../../../admin_services/a-user.service';

@Component({
  selector: 'app-user-role-filter',
  templateUrl: './user-role-filter.component.html',
  styleUrls: ['./user-role-filter.component.css']
})
export class UserRoleFilterComponent {
    participant=false;
    organizer=false;
    data:user[];
    filteredData:user[];

    constructor(private us:UserService){

    }

    ngOnInit(){
      this.data=this.us.getUsers();
    }

    filter(){
      //filter by organizer
      if(this.participant){
        this.participant=!this.participant;
        document.getElementById('btn').textContent='Organizer';
        this.filteredData=this.data.filter(data=>data.user_role==='organizer')
      }
      //filter by participant
      else if(this.organizer){
        this.organizer=!this.organizer;
        document.getElementById('btn').textContent='Participant';
        this.filteredData=this.data.filter(data=>data.user_role==='participant')
      }
      //default one at first
      else{
        this.participant=true;
        document.getElementById('btn').textContent='Participant';
        this.filteredData=this.data.filter(data=>data.user_role==='participant')
      }  

      this.us.filterUpdate.next(this.filteredData);
    }

    reset(){
      this.organizer=false;
      this.participant=false;
      document.getElementById('btn').textContent='Apply';
      this.us.filterUpdate.next(this.data);
    }


}
