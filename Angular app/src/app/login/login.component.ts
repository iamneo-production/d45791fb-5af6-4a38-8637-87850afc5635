import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { Role } from '../models/role';
import { Admin } from '../models/admin';
import { Organizer } from '../models/organizer';
import { Participant } from '../models/participant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formdata = { email: '', password: '' };
  submit = false;
  loading = false;
  errorMessage = '';
  currentRoute: string;

  //to check if admin or not
  isAdmin: boolean = false;
  //to check if organizer or not
  isOrganiser: boolean = false;
  //to check if user or not
  isUser: boolean = false;

  isAuth = false;
  authUser : Admin | Organizer | Participant | null= null;

  isAuthUpdates = this.auth.authUpdates.subscribe((data) => {
    this.isAuth = data;
  });
  authUserUpdates = this.auth.authUserUpdates.subscribe((data) => {
    this.authUser = data;
  });

  constructor(private auth: AuthService, private route: Router) {
    this.currentRoute = route.url;
    if (this.currentRoute.includes('admin/login')) {
      this.isAdmin = true;
      console.log('Welcome admin');
    } else if (this.currentRoute.includes('organiser-login')) {
      this.isOrganiser = true;
      console.log('Welcome Organizer');
    } else if (this.currentRoute.includes('user-login')) {
      this.isUser = true;
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
    this.loading = true;
    const role = this.isAdmin
      ? Role.ADMIN
      : this.isUser
      ? Role.USER
      : Role.ORAGANIZER;

    //call login service
    this.auth.login(this.formdata.email, this.formdata.password, role);

    if (this.isAuth && this.authUser) {
      this.loading = false;
      this.route.navigateByUrl(
        `/${this.authUser.Role.toLowerCase()}/${this.authUser.id}`
      );
    }
  }

  adminLogin() {
    this.route.navigate(['/admin/dashboard']);
  }
}
