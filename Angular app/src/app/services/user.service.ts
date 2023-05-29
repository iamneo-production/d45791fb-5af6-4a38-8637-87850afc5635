import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appRESTService } from './appRESTService';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root',
})
export class UserService implements appRESTService {
  API_URL: string = '/api/users';
  constructor(private http: HttpClient) {}

  getTickets(id: number) {
    return this.http.get(`${this.API_URL}/${id}/tickets`);
  }

  getUser(id: number) {
    return this.http.get<Participant>(`${this.API_URL}/${id}`);
  }
}
