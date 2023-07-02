import { Database } from '../models/databse';
import { Role } from '../models/role';

export const DatabaseData: Database = {
  events: [
    {
      id: 1,
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
      id: 2,
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
      id: 1,
      ParticipantId: 1,
      Name: 'James Hetfield',
      Contact_No: '6000855325',
      Email: 'jh83@gmail.com',
      Password: 'sdhsfjsd',
      TicketId: [1],
      Role: Role.USER,
    },
  ],

  tickets: [
    {
      id: 1,
      ParticipantID: 1,
      EventId: 1,
      Availabilty: 83,
      Price: 1200,
      TicketCount: 23,
      TicketID: 1,
      Type: 'sadhsdfh',
    },
  ],
  organizers: [
    {
      id: 1,
      OrganizerId: 1,
      Name: 'George Fisher',
      Contact_No: '7000855325',
      Email: 'gf83@gmail.com',
      Password: 'sdhsfjsd',
      EventID: [1],
      Role: Role.ORAGANIZER,
    },
  ],
  admins: [
    {
      id: 1,
      AdminID: 1,
      Email: 'raven123@gmail.com',
      Name: 'Ravendark1234',
      Password: '23653573',
      Role: Role.ADMIN,
    },
  ],
  invoices: [
    {
      id: 1,
      Date: new Date(28, 4, 2023, 16, 1).toISOString(),
      InvoiceId: 1,
      TicketId: 1,
      Mode: 'CREDIT_CARD',
    },
  ],
};
