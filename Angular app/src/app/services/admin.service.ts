import { Injectable } from '@angular/core';
import { appRESTService } from './appRESTService';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService implements appRESTService {
  API_URL = '/api/admins';
  constructor(private http: HttpClient) {}

  getAdmin(id: number) {
    return this.http.get<Admin>(`${this.API_URL}/${id}`);
  }
}
