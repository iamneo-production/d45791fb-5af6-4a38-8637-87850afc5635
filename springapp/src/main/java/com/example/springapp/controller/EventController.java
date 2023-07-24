package com.example.springapp.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.model.Event;
import com.example.springapp.service.EventService;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

@CrossOrigin(value = "*")
@RestController
@RequestMapping("/event")

public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
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
}