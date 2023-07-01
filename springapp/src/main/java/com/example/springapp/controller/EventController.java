package com.example.springapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import com.example.springapp.model.Event;
import com.example.springapp.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/event")
public class EventController {

    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping
    public ResponseEntity<String> createEvent(@RequestBody Event event) {
        eventService.createEvent(event);
        return ResponseEntity.status(HttpStatus.CREATED).body("Event created");
    }

    @PutMapping
    public String updateEvent(@RequestBody Event event) {
        eventService.updateEvent(event);
        return "Event updated";
    }

    @DeleteMapping
    public boolean deleteEvent(@RequestParam("id") Long id) {
        return eventService.deleteEvent(id);
    }

    @GetMapping
    public List<Event> getAllEvent() {
        return eventService.getAllEvent();
    }

    @GetMapping("/id")
    public Event getEventById(@RequestParam("id") Long id) {
        return eventService.getEventById(id);
    }
}
