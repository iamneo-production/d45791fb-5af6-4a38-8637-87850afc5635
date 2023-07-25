import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }

  events: any[] = [
    {
      "id": 1,
      "name" : "The Millennial Conference",
      "description" : "Meetings Mean Business is an industry-wide coalition that was created in 2009 to showcase",
      "image": "assets/Images/events/millennial.jpg",
      "start_date" : "Oct 09, 2023",
      "end_date" : "Oct 11, 2023",
      "location" : "Chennai",
      "organised_by" : "Mr. Ajay",
      "amount": 200,
      "capacity" : 100,
      "speakerName": "Mr. Ajay",
      "expertise": "Event Management Specialist",
      "affiliations": "Event Organizer at EventPro Solutions",
      "accomplishments": "Successfully organized multiple industry-wide conferences",
      "biography": "Mr. Ajay is a seasoned event management professional with extensive experience in organizing conferences and meetings. He has a strong track record of delivering successful events that provide valuable networking and learning opportunities for attendees."
    },

   {
      "id" : 2,
      "name" : "The Product Launch",
      "description" : "A product that changes the market befalls in this world and strived to be used by everyone",
      "image": "assets/Images/events/product.jpg",
      "start_date": "July 03, 2023",
      "end_date" : "July 04, 2023",
      "location" : "Coimbatore",
      "organised_by" : "Ms. Sowndarya",
      "amount" : 1000,
      "capacity" : 500,
      "speakerName": "Ms. Sowndarya",
      "expertise": "Product Launch Strategist",
      "affiliations": "Product Launch Consultant at LaunchPad Solutions",
      "accomplishments": "Assisted in the successful launch of several groundbreaking products",
      "biography": "Ms. Sowndarya is a skilled product launch strategist who has helped numerous companies successfully introduce their products to the market. With her expertise in product positioning and marketing strategies, she ensures that every product launch makes a significant impact."
    },

    {
      "id" : 3,
      "name" : "The Tradeshows",
      "description" : "Trade show is a business event where companies showcase their products and services to industry.",
      "image": "assets/Images/events/trade.jpg",
      "start_date" : "Jan 22, 2024",
      "end_date" : "Jan 24,2024",
      "location" : "Salem",
      "organised_by" : "Mr. Jayanand",
      "amount" : 100,
      "capacity" : 300,
      "speakerName": "Mr. Jayanand",
      "expertise": "Trade Show Specialist",
      "affiliations": "Trade Show Consultant at ExpoPro Services",
      "accomplishments": "Organized and managed large-scale trade shows with high participant satisfaction",
      "biography": "Mr. Jayanand is a seasoned trade show specialist with a wealth of experience in organizing and managing exhibitions. His meticulous planning and attention to detail ensure that trade shows provide an excellent platform for companies to showcase their products and services to industry professionals."
   },

    {
      "id" : 4,
      "name" : "Sports Tournaments and Championships",
      "description" : " Competitions, tournaments, matches involving various sports,from local leagues to international championships",
      "image": "assets/Images/events/sport.jpeg",
      "start_date" : "Nov 01, 2023",
      "end_date" : "Nov 03, 2023",
      "location" : "Salem",
      "organised_by" : "Mr. Jayanand",
      "amount" : 100,
      "capacity" : 300,
      "speakerName": "Mr. Jayaprakash",
      "expertise": "Sports Event Organizer",
      "affiliations": "Sports Event Manager at SportsPro Events",
      "accomplishments": "Successfully organized various sports tournaments and championships",
      "biography": "Mr. Jayanand is a dedicated sports event organizer who has played a key role in hosting numerous tournaments and championships. With his passion for sports and expertise in event management, he creates memorable experiences for participants and spectators alike."
    },

    {
      "id" : 5,
      "name" : "E-commerce Solutions Expo",
      "description" : " It is a trade show that showcases a wide range of products, services, and technologies.",
      "image": "assets/Images/events/expo.jpg",
      "start_date" : "May 20, 2023",
      "end_date" : "May 22, 2023",
      "location" : "Salem",
      "organised_by" : "Mr. Jayanand",
      "amount" : 100,
      "capacity" : 300,
      "speakerName": "Mr. Mohan",
      "expertise": "E-commerce Solutions Expert",
      "affiliations": "E-commerce Consultant at E-commerce Solutions Inc.",
      "accomplishments": "Implemented successful e-commerce solutions for multiple businesses",
      "biography": "Mr. Jayanand is an experienced e-commerce solutions expert who has helped numerous businesses establish and optimize their online presence. His in-depth knowledge of the e-commerce landscape enables him to provide valuable insights and strategies to drive growth and maximize sales."

    },

    {
      "id" : 6,
      "name" : "Internet of Things Workshop",
      "description" : "Internet of Things is the inter-networking of physical devices and other items, embedded with electronics, software, sensors,network connectivity that enable these objects to collect and exchange data. ",
      "image": "assets/Images/events/IOT.jpg",
      "start_date" : "Jan 15, 2024",
      "end_date" : "Jan 17, 2024",
      "location" : "Salem",
      "organised_by" : "Mr. Jayanand",
      "amount" : 100,
      "capacity" : 300,
      "speakerName": "Mrs.Karishma",
      "expertise": "Internet of Things (IoT) Specialist",
      "affiliations": "IoT Consultant at IoT Innovations",
      "accomplishments": "Implemented innovative IoT solutions for various industries",
      "biography": "Mr. Jayanand is a recognized expert in the field of Internet of Things (IoT). With his deep understanding of IoT technologies and their applications, he has successfully implemented cutting-edge solutions that improve efficiency, connectivity, and automation in various industries."
    },
    
    {
      "id" : 7,
      "name" : "Seminar",
      "description" : "Seminar is focused on specific topics or skills, often featuring presentations, interactive sessions",
      "image": "assets/Images/events/seminar.jpg",
      "start_date" : "July 01, 2023",
      "end_date" : "July 03, 2023",
      "location" : "Salem",
      "organised_by" : "Mr. Jayanand",
      "amount" : 100,
      "capacity" : 300,

      "speakerName": "Mr. Jaya",
      "expertise": "Seminar Facilitator",
      "affiliations": "Seminar Organizer at SeminarPro",
      "accomplishments": "Conducted engaging and informative seminars on various topics",
      "biography": "Mr. Jayanand is a skilled seminar facilitator known for his ability to deliver engaging and informative sessions. With his extensive knowledge and dynamic presentation style, he ensures that attendees gain valuable insights and practical knowledge from his seminars."
      },
     

    {
      "id" : 8,
      "name" : "Culturals",
      "description" : "Celebrations of culture, arts, music, and traditions, often featuring performances, exhibitions, food, and entertainment",
      "image": "assets/Images/events/cultural.jpeg",
      "start_date" : "Dec 04, 2023",
      "end_date" : "Dec 05, 2023",
      "location" : "Salem",
      "organised_by" : "Mr. Jayanand",
      "amount" : 100,
      "capacity" : 300,
      "speakerName": "Mr. Ashok",
      "expertise": "Event Organizer",
      "affiliations": "Event Management Consultant at EventMasters",
      "accomplishments": "Organized successful cultural events with wide participation",
      "biography": "Mr. Jayanand is an experienced event organizer specializing in cultural events. With his passion for arts, music, and traditions, he creates vibrant and memorable experiences for participants and audiences, showcasing the rich cultural heritage of different communities."

    },

    {
      "id" : 9,
      "name" : "Cybersecurity Symposium",
      "description" : "Celebrations of culture, arts, music, and traditions, often featuring performances, exhibitions, food, and entertainment",
      "image": "assets/Images/events/cyber.png",
      "start_date" : "Sept 17, 2023",
      "end_date" : "Sept 18, 2023",
      "location" : "Salem",
      "organised_by" : "Mr. Jayanand",
      "amount" : 100,
      "capacity" : 300,
      "speakerName": "Varun Kumar",
      "expertise": "Cybersecurity Specialist in network security and ethical hacking.",
      "affiliations": "Security Consultant at SecureTech Solutions Inc.",
      "accomplishments": "Winner of the Cybersecurity Excellence Award for Best Network Security Solution",
      "biography": "Varun has helped organizations strengthen their security infrastructure and protect sensitive data from cyber threats."
      },
    {
      "id" : 10,
      "name" : "Film Screenings and Premieres",
      "description" : "A film screening is the displaying of a motion picture or film, Whereas Premieres are the first screening of a film at a cinema, etc.",
      "image": "assets/Images/events/film.jpg",
      "start_date" : "Dec 04, 2023",
      "end_date" : "Dec 05, 2023",
      "location" : "Salem",
      "organised_by" : "Mr. Jayanand",
      "amount" : 100,
      "capacity" : 300,
      "speakerName": "Mr. Jayanand",
      "expertise": "Film Industry Expert",
      "affiliations": "Film Consultant at FilmPro Studios",
      "accomplishments": "Contributed to the success of several film screenings and premieres",
      "biography": "Mr. Jayanand is a renowned film industry expert who has played a crucial role in organizing and managing film screenings and premieres. With his understanding of the film market and audience preferences, he ensures that every screening and premiere is a memorable and impactful experience."
      },
    {
      "id" : 11,
      "name" : "Fashion Shows and Runways",
      "description" : "Fashion show, models walk the catwalk wearing the designer's creations. Runway, clothing is lit up using a variety of lights and other effects.",
      "image": "assets/Images/events/fashion.png",
      "start_date" : "July 01, 2023",
      "end_date" : "July 03, 2023",
      "location" : "Salem",
      "organised_by" : "Mr. Jayanand",
      "amount" : 100,
      "capacity" : 300,
      "speakerName": "Mr. Jayanand",
      "expertise": "Fashion Show Organizer",
      "affiliations": "Fashion Event Manager at FashionPro Events",
      "accomplishments": "Organized successful fashion shows and runway events",
      "biography": "Mr. Jayanand is a seasoned fashion show organizer with a keen eye for style and trends. His expertise in event management and fashion industry insights allows him to create captivating fashion shows and runway events that showcase the creativity and talent of designers and models."
      },
      {
        "id" : 12,
        "name" : "Debates",
        "description" : "A panel discussion involves a group of people discussing a topic in front of an audience. Panels are typically moderated but are less formal than a debate. ",
        "image": "assets/Images/events/panel.jpg",
        "start_date" : "Jan 15, 2024",
        "end_date" : "Jan 17, 2024",
        "location" : "Salem",
        "organised_by" : "Mr. Jayanand",
        "amount" : 100,
        "capacity" : 300,
        "speakerName": "Mr. Jayanand",
        "expertise": "Panel Discussion and Debate Moderator",
        "affiliations": "Panel Discussion Facilitator at Discourse Dynamics",
        "accomplishments": "Moderated insightful panel discussions and debates on various topics",
        "biography": "Mr. Jayanand is a skilled moderator who excels in facilitating engaging and thought-provoking panel discussions and debates. With his ability to foster constructive dialogue and manage diverse perspectives, he ensures that participants and audience members gain valuable insights and perspectives on the topics at hand."
        },
    {
      "id" : 13,
      "name" : "Panel Discussions and Debates",
      "description" : "A panel discussion involves a group of people discussing a topic in front of an audience. Panels are typically moderated but are less formal than a debate. ",
      "image": "assets/Images/events/panel.jpg",
      "start_date" : "Jan 15, 2024",
      "end_date" : "Jan 17, 2024",
      "location" : "Salem",
      "organised_by" : "Mr. Jayanand",
      "amount" : 100,
      "capacity" : 300,
      "speakerName": "Mr. Jayanand",
      "expertise": "Panel Discussion and Debate Moderator",
      "affiliations": "Panel Discussion Facilitator at Discourse Dynamics",
      "accomplishments": "Moderated insightful panel discussions and debates on various topics",
      "biography": "Mr. Jayanand is a skilled moderator who excels in facilitating engaging and thought-provoking panel discussions and debates. With his ability to foster constructive dialogue and manage diverse perspectives, he ensures that participants and audience members gain valuable insights and perspectives on the topics at hand."
      },
      {
        "id" : 14,
        "name" : "Fashion Show",
        "description" : "Fashion show, models walk the catwalk wearing the designer's creations. Runway, clothing is lit up using a variety of lights and other effects.",
        "image": "assets/Images/events/fashion.png",
        "start_date" : "July 01, 2023",
        "end_date" : "July 03, 2023",
        "location" : "Salem",
        "organised_by" : "Mr. Jayanand",
        "amount" : 100,
        "capacity" : 300,
        "speakerName": "Mr. Jayanand",
        "expertise": "Fashion Show Organizer",
        "affiliations": "Fashion Event Manager at FashionPro Events",
        "accomplishments": "Organized successful fashion shows and runway events",
        "biography": "Mr. Jayanand is a seasoned fashion show organizer with a keen eye for style and trends. His expertise in event management and fashion industry insights allows him to create captivating fashion shows and runway events that showcase the creativity and talent of designers and models."
        },
        {
          "id" : 15,
          "name" : "Magic Show",
          "description" : "Magic show, models walk the catwalk wearing the designer's creations. Runway, clothing is lit up using a variety of lights and other effects.",
          "image": "assets/Images/events/fashion.png",
          "start_date" : "July 01, 2023",
          "end_date" : "July 03, 2023",
          "location" : "Salem",
          "organised_by" : "Mr. Jayanand",
          "amount" : 100,
          "capacity" : 300,
          "speakerName": "Mr. Jayanand",
          "expertise": "Fashion Show Organizer",
          "affiliations": "Fashion Event Manager at FashionPro Events",
          "accomplishments": "Organized successful fashion shows and runway events",
          "biography": "Mr. Jayanand is a seasoned fashion show organizer with a keen eye for style and trends. His expertise in event management and fashion industry insights allows him to create captivating fashion shows and runway events that showcase the creativity and talent of designers and models."
          },
          {
            "id" : 16,
            "name" : "The Planeterium",
            "description" : "Fashion show, models walk the catwalk wearing the designer's creations. Runway, clothing is lit up using a variety of lights and other effects.",
            "image": "assets/Images/events/fashion.png",
            "start_date" : "July 01, 2023",
            "end_date" : "July 03, 2023",
            "location" : "Salem",
            "organised_by" : "Mr. Jayanand",
            "amount" : 100,
            "capacity" : 300,
            "speakerName": "Mr. Jayanand",
            "expertise": "Fashion Show Organizer",
            "affiliations": "Fashion Event Manager at FashionPro Events",
            "accomplishments": "Organized successful fashion shows and runway events",
            "biography": "Mr. Jayanand is a seasoned fashion show organizer with a keen eye for style and trends. His expertise in event management and fashion industry insights allows him to create captivating fashion shows and runway events that showcase the creativity and talent of designers and models."
            },
            {
              "id" : 17,
              "name" : "Event Of the year",
              "description" : "Fashion show, models walk the catwalk wearing the designer's creations. Runway, clothing is lit up using a variety of lights and other effects.",
              "image": "assets/Images/events/fashion.png",
              "start_date" : "July 01, 2023",
              "end_date" : "July 03, 2023",
              "location" : "Salem",
              "organised_by" : "Mr. Jayanand",
              "amount" : 100,
              "capacity" : 300,
              "speakerName": "Mr. Jayanand",
              "expertise": "Fashion Show Organizer",
              "affiliations": "Fashion Event Manager at FashionPro Events",
              "accomplishments": "Organized successful fashion shows and runway events",
              "biography": "Mr. Jayanand is a seasoned fashion show organizer with a keen eye for style and trends. His expertise in event management and fashion industry insights allows him to create captivating fashion shows and runway events that showcase the creativity and talent of designers and models."
              },
              {
                "id" : 18,
                "name" : "Event Of the year",
                "description" : "Fashion show, models walk the catwalk wearing the designer's creations. Runway, clothing is lit up using a variety of lights and other effects.",
                "image": "assets/Images/events/fashion.png",
                "start_date" : "July 01, 2023",
                "end_date" : "July 03, 2023",
                "location" : "Salem",
                "organised_by" : "Mr. Jayanand",
                "amount" : 100,
                "capacity" : 300,
                "speakerName": "Mr. Jayanand",
                "expertise": "Fashion Show Organizer",
                "affiliations": "Fashion Event Manager at FashionPro Events",
                "accomplishments": "Organized successful fashion shows and runway events",
                "biography": "Mr. Jayanand is a seasoned fashion show organizer with a keen eye for style and trends. His expertise in event management and fashion industry insights allows him to create captivating fashion shows and runway events that showcase the creativity and talent of designers and models."
                },
                {
                  "id" : 19,
                  "name" : "Event Of the year",
                  "description" : "Fashion show, models walk the catwalk wearing the designer's creations. Runway, clothing is lit up using a variety of lights and other effects.",
                  "image": "assets/Images/events/fashion.png",
                  "start_date" : "July 01, 2023",
                  "end_date" : "July 03, 2023",
                  "location" : "Salem",
                  "organised_by" : "Mr. Jayanand",
                  "amount" : 100,
                  "capacity" : 300,
                  "speakerName": "Mr. Jayanand",
                  "expertise": "Fashion Show Organizer",
                  "affiliations": "Fashion Event Manager at FashionPro Events",
                  "accomplishments": "Organized successful fashion shows and runway events",
                  "biography": "Mr. Jayanand is a seasoned fashion show organizer with a keen eye for style and trends. His expertise in event management and fashion industry insights allows him to create captivating fashion shows and runway events that showcase the creativity and talent of designers and models."
                  },
                  {
                    "id" : 20,
                    "name" : "Event Of the year",
                    "description" : "Fashion show, models walk the catwalk wearing the designer's creations. Runway, clothing is lit up using a variety of lights and other effects.",
                    "image": "assets/Images/events/fashion.png",
                    "start_date" : "July 01, 2023",
                    "end_date" : "July 03, 2023",
                    "location" : "Salem",
                    "organised_by" : "Mr. Jayanand",
                    "amount" : 100,
                    "capacity" : 300,
                    "speakerName": "Mr. Jayanand",
                    "expertise": "Fashion Show Organizer",
                    "affiliations": "Fashion Event Manager at FashionPro Events",
                    "accomplishments": "Organized successful fashion shows and runway events",
                    "biography": "Mr. Jayanand is a seasoned fashion show organizer with a keen eye for style and trends. His expertise in event management and fashion industry insights allows him to create captivating fashion shows and runway events that showcase the creativity and talent of designers and models."
                    },
                    {
                      "id" : 21,
                      "name" : "Culturals",
                      "description" : "Celebrations of culture, arts, music, and traditions, often featuring performances, exhibitions, food, and entertainment",
                      "image": "assets/Images/events/cultural.jpeg",
                      "start_date" : "Dec 04, 2023",
                      "end_date" : "Dec 05, 2023",
                      "location" : "Salem",
                      "organised_by" : "Mr. Jayanand",
                      "amount" : 100,
                      "capacity" : 300,
                      "speakerName": "Mr. Ashok",
                      "expertise": "Event Organizer",
                      "affiliations": "Event Management Consultant at EventMasters",
                      "accomplishments": "Organized successful cultural events with wide participation",
                      "biography": "Mr. Jayanand is an experienced event organizer specializing in cultural events. With his passion for arts, music, and traditions, he creates vibrant and memorable experiences for participants and audiences, showcasing the rich cultural heritage of different communities."
                
                    },
                    {
                      "id" : 22,
                      "name" : "Movie Of The Year",
                      "description" : "Celebrations of culture, arts, music, and traditions, often featuring performances, exhibitions, food, and entertainment",
                      "image": "assets/Images/events/cultural.jpeg",
                      "start_date" : "Dec 04, 2023",
                      "end_date" : "Dec 05, 2023",
                      "location" : "Salem",
                      "organised_by" : "Mr. Jayanand",
                      "amount" : 100,
                      "capacity" : 300,
                      "speakerName": "Mr. Ashok",
                      "expertise": "Event Organizer",
                      "affiliations": "Event Management Consultant at EventMasters",
                      "accomplishments": "Organized successful cultural events with wide participation",
                      "biography": "Mr. Jayanand is an experienced event organizer specializing in cultural events. With his passion for arts, music, and traditions, he creates vibrant and memorable experiences for participants and audiences, showcasing the rich cultural heritage of different communities."
                
                    },
                    {
                      "id" : 23,
                      "name" : "Teachers Award",
                      "description" : "Celebrations of culture, arts, music, and traditions, often featuring performances, exhibitions, food, and entertainment",
                      "image": "assets/Images/events/cultural.jpeg",
                      "start_date" : "Dec 04, 2023",
                      "end_date" : "Dec 05, 2023",
                      "location" : "Salem",
                      "organised_by" : "Mr. Jayanand",
                      "amount" : 100,
                      "capacity" : 300,
                      "speakerName": "Mr. Ashok",
                      "expertise": "Event Organizer",
                      "affiliations": "Event Management Consultant at EventMasters",
                      "accomplishments": "Organized successful cultural events with wide participation",
                      "biography": "Mr. Jayanand is an experienced event organizer specializing in cultural events. With his passion for arts, music, and traditions, he creates vibrant and memorable experiences for participants and audiences, showcasing the rich cultural heritage of different communities."
                
                    },
                    {
                      "id" : 24,
                      "name" : "Movie Of The Year",
                      "description" : "Celebrations of culture, arts, music, and traditions, often featuring performances, exhibitions, food, and entertainment",
                      "image": "assets/Images/events/cultural.jpeg",
                      "start_date" : "Dec 04, 2023",
                      "end_date" : "Dec 05, 2023",
                      "location" : "Salem",
                      "organised_by" : "Mr. Jayanand",
                      "amount" : 100,
                      "capacity" : 300,
                      "speakerName": "Mr. Ashok",
                      "expertise": "Event Organizer",
                      "affiliations": "Event Management Consultant at EventMasters",
                      "accomplishments": "Organized successful cultural events with wide participation",
                      "biography": "Mr. Jayanand is an experienced event organizer specializing in cultural events. With his passion for arts, music, and traditions, he creates vibrant and memorable experiences for participants and audiences, showcasing the rich cultural heritage of different communities."
                
                    },
                    {
                      "id" : 25,
                      "name" : "Students Award",
                      "description" : "Celebrations of culture, arts, music, and traditions, often featuring performances, exhibitions, food, and entertainment",
                      "image": "assets/Images/events/cultural.jpeg",
                      "start_date" : "Dec 04, 2023",
                      "end_date" : "Dec 05, 2023",
                      "location" : "Salem",
                      "organised_by" : "Mr. Jayanand",
                      "amount" : 100,
                      "capacity" : 300,
                      "speakerName": "Mr. Ashok",
                      "expertise": "Event Organizer",
                      "affiliations": "Event Management Consultant at EventMasters",
                      "accomplishments": "Organized successful cultural events with wide participation",
                      "biography": "Mr. Jayanand is an experienced event organizer specializing in cultural events. With his passion for arts, music, and traditions, he creates vibrant and memorable experiences for participants and audiences, showcasing the rich cultural heritage of different communities."
                
                    },
                    {
                      "id" : 26,
                      "name" : "Cricketer Award",
                      "description" : "Celebrations of culture, arts, music, and traditions, often featuring performances, exhibitions, food, and entertainment",
                      "image": "assets/Images/events/cultural.jpeg",
                      "start_date" : "Dec 04, 2023",
                      "end_date" : "Dec 05, 2023",
                      "location" : "Salem",
                      "organised_by" : "Mr. Jayanand",
                      "amount" : 100,
                      "capacity" : 300,
                      "speakerName": "Mr. Ashok",
                      "expertise": "Event Organizer",
                      "affiliations": "Event Management Consultant at EventMasters",
                      "accomplishments": "Organized successful cultural events with wide participation",
                      "biography": "Mr. Jayanand is an experienced event organizer specializing in cultural events. With his passion for arts, music, and traditions, he creates vibrant and memorable experiences for participants and audiences, showcasing the rich cultural heritage of different communities."
                
                    },
                    {
                      "id" : 25,
                      "name" : "Students Award",
                      "description" : "Celebrations of culture, arts, music, and traditions, often featuring performances, exhibitions, food, and entertainment",
                      "image": "assets/Images/events/cultural.jpeg",
                      "start_date" : "Dec 04, 2023",
                      "end_date" : "Dec 05, 2023",
                      "location" : "Salem",
                      "organised_by" : "Mr. Jayanand",
                      "amount" : 100,
                      "capacity" : 300,
                      "speakerName": "Mr. Ashok",
                      "expertise": "Event Organizer",
                      "affiliations": "Event Management Consultant at EventMasters",
                      "accomplishments": "Organized successful cultural events with wide participation",
                      "biography": "Mr. Jayanand is an experienced event organizer specializing in cultural events. With his passion for arts, music, and traditions, he creates vibrant and memorable experiences for participants and audiences, showcasing the rich cultural heritage of different communities."
                
                    }
      
   // Add more events...
  ]; 

  getAllEvents(){
    //return this.http.get().subscribe(()=> {return this.events});
    return this.events;
  }

  getEvent(index : number)
  {
    return this.events[index];
  }
}
