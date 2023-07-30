import {
  InMemoryDbService,
  RequestInfo,
  ResponseOptions,
  STATUS,
} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Participant } from '../../models/participant';
import { Organizer } from '../../models/organizer';
import { Injectable } from '@angular/core';
import { idUpdater } from '../../utils/utils';
import { Role } from 'src/app/models/role';
import { DatabaseData } from 'src/app/utils/database';
import { Database } from 'src/app/models/databse';

@Injectable({
  providedIn: 'root',
})
export class BackendService implements InMemoryDbService {
  createDb(
    reqInfo?: RequestInfo | undefined
  ): Database | Observable<Database> | Promise<Database> {
    const data: Database = DatabaseData;

    return data;
  }

  get(reqInfo: RequestInfo) {
    const { collectionName, collection, headers, url, query } = reqInfo;
    if (!query.has('Email') || !query.has('Password')) return undefined;
    let user: any;

    // users collcetion
    if (collectionName === 'users') {
      user = collection.filter(
        (user: Participant) =>
          user.email === query.get('Email')![0] &&
          user.password === query.get('Password')![0]
      );
    }
    // Organizer collection
    if (collectionName === 'organizers') {
      user = collection.filter(
        (user: Organizer) =>
          user.email === query.get('Email')![0] &&
          user.password === query.get('Password')![0]
      );
    }

    if (['users', 'organizers'].includes(collectionName)) {
      return reqInfo.utils.createResponse$(() => ({
        body: user.length === 1 ? user[0] : undefined,
        status: STATUS.OK,
        headers,
        url,
      }));
    }

    return undefined;
  }

  post(reqInfo: RequestInfo) {
    const { collectionName, collection, headers, url } = reqInfo;
    const data = reqInfo.utils.getJsonBody(reqInfo.req);

    //Adding additional attributes
    // for mainiting the structure
    if (collectionName === 'users') {
      data.UserID = idUpdater(collection);
      data.id = data.UserID;
      data.Role = Role.USER;

      data.TicketID = [];
    }

    if (collectionName === 'organizers') {
      data.UserID = idUpdater(collection);
      data.id = data.UserID;
      data.Role = Role.ORAGANISER;

      data.EventID = [];
    }

    if (collectionName === 'tickets') {
      // Keep ticketId
      // and id same for dev purposes
      data.TicketID = idUpdater(collection);
      data.id = data.eventId;
    }

    if (collectionName === 'events') {
      // Keep eventId
      // and id same for dev purposes
      data.EventID = idUpdater(collection);
      data.id = data.eventId;
      data.TicketID_List = [];
    }

    if (['users', 'events', 'ticket', 'organizers'].includes(collectionName)) {
      collection.push(data); //push the data on the right collection

      const resOptions: ResponseOptions = {
        body: { data },
        status: STATUS.OK,
        headers,
        url,
      };

      return reqInfo.utils.createResponse$(() => resOptions);
    }

    return undefined;
  }
}
