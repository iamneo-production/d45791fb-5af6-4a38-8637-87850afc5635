import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Admin } from '../models/admin';
import { Organizer } from '../models/organizer';
import { Participant } from '../models/participant';
import { Role } from '../models/role';
import { ErrorService } from '../services/api/error.service';

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

    if (this.isAuth && this.authUser) {
      this.loading = false;
      const role = this.authUser.role.split('_')[1];
      console.log(this.authUser);
      this.router.navigateByUrl(`/${role.toLowerCase()}/${this.authUser.id}`);
    }
  });

  errorUpdates = this.errorService.errorUpdates.subscribe((data) => {
    this.errorMessage = data.message;
    if (data) {
      this.loading = false;
    }
  });

  constructor(
    private router: Router,
    private auth: AuthService,
    private errorService: ErrorService
  ) {
    this.currentRoute = router.url;
    if (this.currentRoute.includes('/organiser-register')) {
      this.isOrganiser = true;
      this.formdata.role = Role.ORAGANISER;
      console.log('Welcome Organizer');
    } else if (this.currentRoute.includes('/user-register')) {
      this.isUser = true;
      this.formdata.role = Role.USER;
      console.log('Welcome User');
    }
  }

  // subscribe to global updates here
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.isAuthUpdates.unsubscribe();
    this.authUserUpdates.unsubscribe();
    this.errorUpdates.unsubscribe();
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
