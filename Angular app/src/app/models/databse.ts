import { Admin } from './admin';
import { Invoice } from './invoice';
import { Organizer } from './organizer';
import { Participant } from './participant';
import { Ticket } from './ticket';
import { Event } from './event';

// add mock data based on this interface
// keep the id field same as the original index
// Only for mocking backend
export interface Database {
  events: Event[];
  tickets: Ticket[];
  users: Participant[];
  organizers: Organizer[];
  invoices: Invoice[];
  admins: Admin[];
}
