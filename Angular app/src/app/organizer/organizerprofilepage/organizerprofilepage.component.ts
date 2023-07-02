import { Component } from '@angular/core';

@Component({
  selector: 'app-organizerprofilepage',
  templateUrl: './organizerprofilepage.component.html',
  styleUrls: ['./organizerprofilepage.component.css']
})
export class OrganizerprofilepageComponent {
  isEdit = false;

  edit() {
    if (this.isEdit == false) {
      this.isEdit = true;
      document.getElementById('btn')!.textContent = 'Update Profile';
    }
    else if (this.isEdit == true) {
      this.isEdit = false;
      document.getElementById('btn')!.textContent = 'Edit Profile';
    }
  }

}
