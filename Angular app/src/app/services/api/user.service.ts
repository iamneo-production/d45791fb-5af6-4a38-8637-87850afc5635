import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRESTService } from './appRESTService';
import { Participant } from '../../models/participant';
import { catchError, tap } from 'rxjs';

interface UserDataInput {
  Name: string;
  Email: string;
  Password: string;
  Contact_No: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService extends AppRESTService {
  API_URL: string = `${localStorage.getItem("BASE_URL")}`; // /api/users
  constructor(private http: HttpClient) {
    super();
  }

  getUser(id: number) {
    return this.http
      .get<Participant>(`${this.API_URL}/${id}`)
      .pipe(tap(), catchError(this.handleError));
  }

  getUserByEmailAndPassword(email: string, password: string) {
    return this.http
      .get<Participant>(
        `${this.API_URL}?Email=${encodeURIComponent(
          email
        )}&Password=${password}`
      )
      .pipe(tap(), catchError(this.handleError));
  }

  addUser(input: UserDataInput) {
    return this.http
      .post(this.API_URL, input)
      .pipe(tap(), catchError(this.handleError));
  }

  updateUser(input: any) {
    return this.http
      .put(`${this.API_URL}/user/update/${input.id}`, input)
      .pipe(tap(), catchError(this.handleError));
  }

  getAttendeeDetails(id: any) {
    return this.http
      .get(`${this.API_URL}/attendee/trackuser?id=${id}`)
      .pipe(tap(), catchError(this.handleError));
  }
}
