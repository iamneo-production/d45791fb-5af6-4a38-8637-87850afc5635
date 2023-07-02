import { Component } from '@angular/core';

@Component({
  selector: 'app-userprolfie',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  isEditMode = false;

  toEdit(){
    console.log('edit');
    if(this.isEditMode==false){
      this.isEditMode=!this.isEditMode;
      document.getElementById('submit')!.textContent="update";
    }
    else if(this.isEditMode==true){
      this.isEditMode=!this.isEditMode;
      document.getElementById('submit')!.textContent="Edit";
    }
  }
}
