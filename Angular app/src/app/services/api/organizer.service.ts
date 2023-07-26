import { Injectable } from '@angular/core';
import { AppRESTService } from './appRESTService';
import { HttpClient } from '@angular/common/http';
import { Organizer } from '../../models/organizer';
import { catchError, tap } from 'rxjs';

interface OrganizerDataInput {
  Name: string;
  Email: string;
  Password: string;
  Contact_No: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrganizerService extends AppRESTService {

  API_URL = 'https://8080-ffbabacccfdaddfdebcdfcddfaadfadc.project.examly.io';
 

  constructor(private http: HttpClient) {
    super();
  }
  getOrganiser(id: number) {
    return this.http
      .get<Organizer>(`${this.API_URL}/${id}`)
      .pipe(tap(), catchError(this.handleError));
  }

  addOrganizer(input: OrganizerDataInput) {
    return this.http
      .post(this.API_URL, input)
      .pipe(tap(), catchError(this.handleError));
  }

  updateOrganizer(input: any) {
    return this.http
      .put(`${this.API_URL}/user/update/${input.id}`, input)
      .pipe(tap(), catchError(this.handleError));
  }
  

  getOrganizerByEmailAndPassword(email: string, password: string) {
    return this.http
      .get<Organizer>(
        `${this.API_URL}?Email=${encodeURIComponent(
          email
        )}&Password=${password}`
      )
      .pipe(tap(), catchError(this.handleError));
  }
}
