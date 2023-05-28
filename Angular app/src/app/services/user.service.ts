import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appRESTService } from './appRESTService';

@Injectable({
  providedIn: 'root',
})
export class UserService implements appRESTService {
  API_URL: string = '/api/users';
  constructor(private http: HttpClient) {}

  getTickets(id: number) {
    this.http.get(`${this.API_URL}/${id}/tickets`);
  }

  getUserById(id: number) {
    this.http.get(`${this.API_URL}/${id}`);
  }
}
