import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Admin } from '../models/admin';
import { Organizer } from '../models/organizer';
import { Participant } from '../models/participant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  formdata = {
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmpassword: '',
    address: '',
    role: '',
    idProof: File,
  };
  submit = false;
  errorMessage = '';
  loading = false;
  selectedRole: string = '';
  isFileUploaded: boolean = true;

  currentRoute: string;

  //to check if organizer or not
  isOrganiser: boolean = false;
  //to check if user or not
  isUser: boolean = false;

  authUser: Admin | Organizer | Participant | null = null;

  isAuth = false;

  isAuthUpdates = this.auth.authUpdates.subscribe((data) => {
    this.isAuth = data;
  });
  authUserUpdates = this.auth.authUserUpdates.subscribe((data) => {
    this.authUser = data;

    // only chnage url based on auth
    if (this.isAuth && this.authUser) {
      this.submit = false;
      this.loading = false;
      console.log(this.auth.authUser);

      this.router.navigateByUrl(`/home`);
    }
  });

  constructor(private router: Router, private auth: AuthService) {
    this.currentRoute = router.url;
    if (this.currentRoute.includes('/organiser-register')) {
      this.isOrganiser = true;
      this.formdata.role = 'organiser';
      console.log('Welcome Organizer');
    } else if (this.currentRoute.includes('/user-register')) {
      this.isUser = true;
      this.formdata.role = 'participant';
      console.log('Welcome User');
    }
  }

  // subscribe to global updates here
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.isAuthUpdates.unsubscribe();
    this.authUserUpdates.unsubscribe();
  }

  onSubmit() {
    this.submit = true;
    this.loading = true;

    const username = this.formdata.firstname + ' ' + this.formdata.lastname;
    const password = this.formdata.password;
    const email = this.formdata.email;
    const contactNo = this.formdata.phonenumber;

    // made the specific changes
    if (this.isUser) this.auth.signupUser(email, password, username, contactNo);
    if (this.isOrganiser)
      this.auth.signupOrganizer(email, password, username, contactNo);

    const fileInput: HTMLInputElement | null = document.querySelector(
      'input[name="fileInput"]'
    );
    if (fileInput && fileInput.files && fileInput.files.length > 0)
      this.isFileUploaded = true;
    else this.isFileUploaded = false;
    console.log(this.isFileUploaded);
    // Perform form submission logic here
  }

  // checkRoleSelection() {
  //   this.isRoleSelected = this.selectedRole !== undefined && this.selectedRole !== '';
  // }
}
