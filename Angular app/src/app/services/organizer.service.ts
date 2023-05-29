import { Injectable } from '@angular/core';
import { appRESTService } from './appRESTService';
import { HttpClient } from '@angular/common/http';
import { Organizer } from '../models/organizer';

@Injectable({
  providedIn: 'root',
})
export class OrganizerService implements appRESTService {
  API_URL = '/api/organizers';

  constructor(private http: HttpClient) {}
  getOrganiser(id: number) {
    return this.http.get<Organizer>(`${this.API_URL}/${id}`);
  }
}
