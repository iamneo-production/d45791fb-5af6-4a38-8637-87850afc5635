import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { Participant } from '../models/participant';
import { Organizer } from '../models/organizer';
import { Invoice } from '../models/invoice';
import { Admin } from '../models/admin';
import { Event } from '../models/event';

interface Database {
  events: Event[];
  tickets: Ticket[];
  users: Participant[];
  organizers: Organizer[];
  invoices: Invoice[];
  admins: Admin[];
}

export class BackendService implements InMemoryDbService {
  createDb(
    reqInfo?: RequestInfo | undefined
  ): Database | Observable<Database> | Promise<Database> {
    const data: Database = {
      events: [
        {
          EventID: 1,
          Capacity: 10000,
          Description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit tincidunt lacinia. Nam in feugiat tortor. Curabitur nec ligula non quam interdum malesuada. Phasellus posuere rutrum commodo. Nam congue orci sed nulla vulputate faucibus fermentum nec metus. Cras maximus nulla laoreet odio maximus elementum. In a ultrices eros. Donec et purus sapien. Morbi et nibh dignissim, mollis ex et, consequat massa. Morbi ut hendrerit diam, in efficitur velit. Fusce in risus metus. Duis porta, ex ut varius posuere, ex diam semper metus, a laoreet nisi nisi eu neque. In ut ultrices justo, vitae ullamcorper nulla.',
          Name: 'Lorem Ipsum',
          City: 'Kolkata',
          Price: 1200,
          TicketID_List: [],
          EventType: 'Weeding',
          State: 'West Bengal',
          OrganizerId: 1,
          Zipcode: 700141,
          StartDate: new Date(2023, 8, 28, 18, 30).toISOString(),
          EndDate: new Date(2023, 8, 28, 20, 30).toISOString(),
        },
        {
          EventID: 2,
          Capacity: 15000,
          Description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit tincidunt lacinia. Nam in feugiat tortor. Curabitur nec ligula non quam interdum malesuada. Phasellus posuere rutrum commodo. Nam congue orci sed nulla vulputate faucibus fermentum nec metus. Cras maximus nulla laoreet odio maximus elementum. In a ultrices eros. Donec et purus sapien. Morbi et nibh dignissim, mollis ex et, consequat massa. Morbi ut hendrerit diam, in efficitur velit. Fusce in risus metus. Duis porta, ex ut varius posuere, ex diam semper metus, a laoreet nisi nisi eu neque. In ut ultrices justo, vitae ullamcorper nulla.',
          Name: 'Lorem Ipsum',
          City: 'Kolkata',
          Price: 1200,
          TicketID_List: [],
          EventType: 'Seminar',
          State: 'West Bengal',
          OrganizerId: 1,
          Zipcode: 700141,
          StartDate: new Date(2023, 8, 28, 18, 30).toISOString(),
          EndDate: new Date(2023, 8, 28, 20, 30).toISOString(),
        },
      ],

      users: [
        {
          ParticipantId: 1,
          Name: 'James Hetfield',
          Contact_No: '6000855325',
          Email: 'jh83@gmail.com',
          Password: 'sdhsfjsd',
          TicketId: [1],
        },
      ],

      tickets: [
        {
          ParticipantId: 1,
          EventId: 1,
          Availabity: 83,
          Price: 1200,
          TicketCount: 23,
          TicketId: 1,
          Type: 'sadhsdfh',
        },
      ],
      organizers: [
        {
          OrganizerId: 1,
          Name: 'George Fisher',
          Contact_No: '7000855325',
          Email: 'gf83@gmail.com',
          Password: 'sdhsfjsd',
          EventId: [1],
        },
      ],
      admins: [
        {
          AdminId: 1,
          Email: 'raven123@gmail.com',
          Name: 'Ravendark1234',
          Password: '23653573',
        },
      ],
      invoices: [
        {
          Date: new Date(28, 4, 2023, 16, 1).toISOString(),
          InvoiceId: 1,
          TicketId: 1,
          Mode: 'CREDIT_CARD',
        },
      ],
    };

    return data;
  }
}
