import { Organizer } from "./organizer";

export interface Event{
    id?:number;
    name:string;
    description:string;
    shortDescription:string;
    // you want to send the organizer id while sending the post request so be aware of it
    organiser?:number;
    location:string;
    startDate:string;
    endDate:string;
    speakerName:string;
    speakerExpertise:string;
    speakerAffiliations:string;
    speakerAccomplishments:string;
    speakerBiography:string;
    price:number;
    totalTickets:number;
    imgUrl:string;
    attendees?:string[];
    tickets?:string[];
}