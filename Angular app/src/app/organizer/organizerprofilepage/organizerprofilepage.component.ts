import { Component, Input } from '@angular/core';
import { OrganizerService } from 'src/app/services/api/organizer.service';

@Component({
  selector: 'app-organizerprofilepage',
  templateUrl: './organizerprofilepage.component.html',
  styleUrls: ['./organizerprofilepage.component.css']
})
export class OrganizerprofilepageComponent {

  constructor(private organiserservice : OrganizerService) {}

  isEdit = false;

  organiser : any;
  firstname : any;
  lastname : any;
  noOfEvents:string=localStorage.getItem("noOfEvent");

  ngOnInit() {
    this.organiser = JSON.parse(localStorage.getItem('user'))
    this.organiser.password = "";
    this.getFirstNameAndLastName();
    console.log(this.organiser);

  }

  getFirstNameAndLastName() {
    let name = this.organiser.name.split(" ");
    let firstname = name[0];
    let lastname = name[1];
    let length = name.length;
    if(length > 2) {
      for(let i=1;i<length-1;i++) {
        firstname+=name[i];
      }
      lastname = name[length-1];
    }
    // console.log(firstname,lastname);
    this.firstname = firstname;
    this.lastname = lastname;

  }

  edit() {
    if (this.isEdit == false) {
      this.isEdit = true;
      document.getElementById('btn')!.textContent = 'Update Profile';
    }
    else if (this.isEdit == true) {
      this.isEdit = false;
      console.log(this.organiser)
      this.updateProfile();
      document.getElementById('btn')!.textContent = 'Edit Profile';
    }
  }


  updateProfile() {
    this.organiserservice.updateOrganizer(this.organiser).subscribe((data) => {
      console.log(data);
    });
  }
}
