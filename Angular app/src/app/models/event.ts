export interface Event {
  EventID: number;
  Name: string;
  Description: string;
  City: string;
  State: string;
  Zipcode: number;
  StartDate: string;
  EndDate: string;
  Capacity: number;
  EventType: string;
  Price: number;
  OrganizerId: number;
  TicketID_List: number[];
}
