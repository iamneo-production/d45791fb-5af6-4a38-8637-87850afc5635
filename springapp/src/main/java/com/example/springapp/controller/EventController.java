package com.example.springapp.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.model.Event;
import com.example.springapp.model.Attendee;
import com.example.springapp.service.EventService;
import com.example.springapp.service.AttendeeService;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(value = "*")
@RestController
@RequestMapping("/event")

public class EventController {

    private final EventService eventService;
    private final AttendeeService attendeeService;

    public EventController(EventService eventService,AttendeeService attendeeService) {
        this.eventService = eventService;
        this.attendeeService = attendeeService;
    }

    @PostMapping
    // @PreAuthorize("hasRole('ROLE_ORGANISER')")
    public ResponseEntity<String> createEvent(@RequestBody Event event) {
        eventService.createEvent(event);
        return ResponseEntity.status(HttpStatus.CREATED).body("Event created");
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ORGANISER')")
    public String updateEvent(@PathVariable Long id,@RequestBody Event event) {
        event.setId(id);
    	eventService.updateEvent(event);
        return "Event updated";
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_ORGANISER')")
    public boolean deleteEvent( @PathVariable Long id) {
        return eventService.deleteEvent(id);
    }

    @GetMapping
    public List<Event> getAllEvent() {
        return eventService.getAllEvent();
    }

    @GetMapping("/{id}")
    public Event getEventById(@PathVariable("id") Long id) {
        return eventService.getEventById(id);
    }

    @GetMapping("/organiser/{organiserId}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_ORGANISER')")
    public List<Event> getEventsByOrganizerId(@PathVariable Long organiserId) {
        return eventService.getEventsByOrganiserId(organiserId);
    }

    // Get Events By AttendeeId From User Id
    @GetMapping("/user/attendee/{userid}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_ORGANISER')")
    public List<Event> getEventsByAttendeeIdFromUserId(@PathVariable Long userid) {
        List<Attendee> attendeeList = attendeeService.getAttendeeByUserId(userid);;
        List<Event> eventlist = new ArrayList<Event>();
        for (Attendee attendee : attendeeList) {
            Event event =  eventService.getEventById(attendee.getEvent().getId());
            // System.out.println(attendee.getEvent().getId());
            if(eventlist.contains(event)) continue;
            eventlist.add(event);
        }
        return eventlist;
    }
}