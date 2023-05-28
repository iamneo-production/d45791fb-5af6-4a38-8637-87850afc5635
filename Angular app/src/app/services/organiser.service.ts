import { Injectable } from '@angular/core';
import { appRESTService } from './appRESTService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrganiserService implements appRESTService {
  API_URL = '/api/organisers';

  constructor(private http: HttpClient) {}
  getOrganiser(id: number) {
    return this.http.get(`${this.API_URL}/${id}`);
  }
}
