import { Injectable } from '@angular/core';
import { UserService } from '../api/user.service';
import { Subject, of, tap } from 'rxjs';
import { Participant } from 'src/app/models/participant';
import { Admin } from 'src/app/models/admin';
import { Organizer } from 'src/app/models/organizer';
import { Role } from 'src/app/models/role';
import { OrganizerService } from '../api/organizer.service';

// for razorpay to get native window support
function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // for razorpay to get native window support
  get nativeWindow(): any {
    return _window();
  }

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
    this.authUserUpdates.next(this._authUser);
  }

  hasAuthenticatedUser() {
    return of(this.isAuth && this.authUser.Role === Role.USER).pipe(
      tap((v) => console.log(v))
    );
  }

  // Initiate the login process
  login(email: string, password: string, role: Role) {
    switch (role) {
      case Role.USER:
        this.userService
          .getUserByEmailAndPassword(email, password)
          .subscribe((data) => {
            this.isAuth = true;
            this.authUser = data;
          });
        break;

      case Role.ORAGANIZER:
        this.organizerService
          .getOrganizerByEmailAndPassword(email, password)
          .subscribe((data) => {
            this.isAuth = true;
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
        this.userService
          .getUserByEmailAndPassword(email, password)
          .subscribe((data) => {
            this.isAuth = true;
            this.authUser = data;
          });
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
        this.organizerService
          .getOrganizerByEmailAndPassword(email, password)
          .subscribe((data) => {
            this.isAuth = true;
            this.authUser = data;
          });
      });
  }

  logout() {
    this.isAuth = false;
  }
}
