import { Injectable } from '@angular/core';
import { Subject, of, tap } from 'rxjs';
import { Participant } from 'src/app/models/participant';
import { Admin } from 'src/app/models/admin';
import { Organizer } from 'src/app/models/organizer';
import { Role } from 'src/app/models/role';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../api/error.service';
import { parseJwt } from 'src/app/utils/utils';

interface AuthResponse {
  msg: string;
  data: {
    jwt: string;
    user: any;
  };
}

// for razorpay to get native window support
function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = localStorage.getItem("BASE_URL");
  JWT = 'jwt';
  USER = 'user';
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

  constructor(private http: HttpClient, private errorService: ErrorService) {}

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
  // _______
  // autologin for valid token
  autologin() {
    const jwt = localStorage.getItem(this.JWT);
    const user = JSON.parse(localStorage.getItem(this.USER));

    if (!user && !jwt) return;

    const parsedToken = parseJwt(jwt);
    const expirySeconds = parsedToken['exp'] * 1000;

    if (expirySeconds > Date.now()) {
      console.log(user);
      this.isAuth = true;
      this.authUser = user;
    }
  }
  // Initiate the login process
  login(email: string, password: string, role: Role) {
    return this.http
      .post(`${this.API_URL}/signin`, {
        email,
        password,
        role,
      })
      .subscribe({
        next: this._handleSuccessAuth,
        error: (err: HttpErrorResponse) => {
          this.errorService.error = err.error;
        },
      });
  }

  // Initiate the signup user process
  signupUser(email: string, password: string, name: string, phone: string) {
    return this._signUp(email, password, name, phone, Role.USER);
  }

  signupOrganizer(
    email: string,
    password: string,
    name: string,
    phone: string
  ) {
    return this._signUp(email, password, name, phone, Role.ORAGANISER);
  }

  signupAdmin(email: string, password: string, name: string, phone: string) {
    return this._signUp(email, password, name, phone, Role.ADMIN);
  }

  logout() {
    this.isAuth = false;
    this.authUser = null;

    localStorage.removeItem(this.JWT);
  }

  // private methods to make
  // task easy
  private _signUp(
    email: string,
    password: string,
    name: string,
    phone: string,
    role: Role
  ) {
    return this.http
      .post(`${this.API_URL}/signup`, {
        email,
        password,
        name,
        phone,
        role,
      })
      .subscribe({
        next: this._handleSuccessAuth,
        error: this.errorService.handleApiErrors,
      });
  }

  private _handleSuccessAuth = (res: AuthResponse) => {
    // this.isAuth = true;
    //         this.authUser = data;
    const { user, jwt } = res.data;

    localStorage.setItem(this.JWT, jwt);
    localStorage.setItem(this.USER, JSON.stringify(user));

    this.isAuth = true;
    this.authUser = user;
  };
}
