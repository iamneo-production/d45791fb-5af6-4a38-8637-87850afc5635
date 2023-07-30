export interface user{
    id:number;
    f_name?:string;
    l_name?:string;
    name:string;
    email:string;
    phone:string;
    role:string;
    address:string;
    previous_organized_events?:string[];
    previous_participated_events?:string[];
}