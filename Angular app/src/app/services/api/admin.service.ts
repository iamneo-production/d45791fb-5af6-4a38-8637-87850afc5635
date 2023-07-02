import { Injectable } from '@angular/core';
import { AppRESTService } from './appRESTService';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../../models/admin';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService extends AppRESTService {
  API_URL = '/api/admins';
  constructor(private http: HttpClient) {
    super();
  }

  getAdmin(id: number) {
    return this.http
      .get<Admin>(`${this.API_URL}/${id}`)
      .pipe(tap(), catchError(this.handleError));
  }
}

