export interface user{
    user_id:number;
    first_name:string;
    last_name:string;
    email:string;
    password:string;
    phone_number:string;
    user_role:string;
    address:string;
    previous_organized_events?:string[];
    previous_participated_events?:string[];
}