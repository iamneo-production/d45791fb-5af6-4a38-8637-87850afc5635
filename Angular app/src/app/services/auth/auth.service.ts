import { Injectable } from '@angular/core';
import { UserService } from '../api/user.service';
import { Subject } from 'rxjs';
import { Participant } from 'src/app/models/participant';
import { Admin } from 'src/app/models/admin';
import { Organizer } from 'src/app/models/organizer';
import { Role } from 'src/app/models/role';
import { OrganizerService } from '../api/organizer.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuth: boolean = false;
  private _authUser!: Admin | Organizer | Participant;

  authUpdates: Subject<boolean> = new Subject<boolean>();
  authUserUpdates: Subject<Admin | Organizer | Participant> = new Subject<
    Admin | Organizer | Participant
  >();

  constructor(
    private userService: UserService,
    private organizerService: OrganizerService
  ) {}

  //Getters and Setters
  get isAuth() {
    return this._isAuth;
  }

  get authUser() {
    return this._authUser;
  }

  set isAuth(val: boolean) {
    this._isAuth = val;
    this.authUpdates.next(this._isAuth);
  }

  set authUser(val: Admin | Organizer | Participant) {
    this._authUser = val;
  }

  // Initiate the login process
  login(email: string, password: string, role: Role) {
    switch (role) {
      case Role.USER:
        this.userService
          .getUserByEmailAndPassword(email, password)
          .subscribe((data) => {
            this.isAuth = !!data;
            this.authUser = data;
          });
        break;

      case Role.ORAGANIZER:
        this.organizerService
          .getOrganizerByEmailAndPassword(email, password)
          .subscribe((data) => {
            this.isAuth = !!data;
            this.authUser = data;
          });
        break;

      case Role.ADMIN:
        break;

      default:
        break;
    }
  }

  // Initiate the signup user process
  signupUser(
    email: string,
    password: string,
    name: string,
    contact_No: string
  ) {
    this.userService
      .addUser({
        Email: email,
        Name: name,
        Password: password,
        Contact_No: contact_No,
      })
      .subscribe(() => {
        this.isAuth = true;
      });
  }

  signupOrganizer(
    email: string,
    password: string,
    name: string,
    contact_No: string
  ) {
    this.organizerService
      .addOrganizer({
        Email: email,
        Name: name,
        Password: password,
        Contact_No: contact_No,
      })
      .subscribe(() => {
        this.isAuth = true;
      });
  }

  logout() {
    this.isAuth = false;
  }
}
