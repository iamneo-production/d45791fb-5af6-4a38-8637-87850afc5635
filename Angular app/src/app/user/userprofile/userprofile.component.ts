import { Component } from '@angular/core';
import { UserService } from 'src/app/services/api/user.service';

@Component({
  selector: 'app-userprolfie',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  constructor(private userservice : UserService) {}

  isEditMode = false;

  user : any;
  firstname : any;
  lastname : any;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    // this.user.password = "";
    this.getFirstNameAndLastName();
    console.log(this.user);

  }

  getFirstNameAndLastName() {
    let name = this.user.name.split(" ");
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

  toEdit(){
    console.log('edit');
    if(this.isEditMode==false){
      this.isEditMode=!this.isEditMode;
      document.getElementById('submit')!.textContent="update";
    }
    else if(this.isEditMode==true){
      this.isEditMode=!this.isEditMode;
      this.updateProfile();
      document.getElementById('submit')!.textContent="Edit";
    }
  }

  updateProfile() {

    this.user.name = this.firstname + " " + this.lastname;
    
    console.log(this.user);
    this.userservice.updateUser(this.user).subscribe((data) => {
      console.log(data);
      localStorage.setItem('user',JSON.stringify(data));
    });
  }
}
