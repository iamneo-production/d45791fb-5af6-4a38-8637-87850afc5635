package com.example.springapp.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.model.Event;
import com.example.springapp.service.EventService;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/event")

public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping
    public ResponseEntity<String> createEvent(@RequestBody Event event) {
        eventService.createEvent(event);
        return ResponseEntity.status(HttpStatus.CREATED).body("Event created");
    }

    @PutMapping("/{id}")
    public String updateEvent(@PathVariable Long id,@RequestBody Event event) {
        event.setId(id);
    	eventService.updateEvent(event);
        return "Event updated";
    }

    @DeleteMapping("/{id}")
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
}