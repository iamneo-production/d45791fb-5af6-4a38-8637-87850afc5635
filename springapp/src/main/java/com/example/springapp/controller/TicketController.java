package com.example.springapp.controller;

import com.example.springapp.model.Ticket;
import com.example.springapp.model.Attendee;
import com.example.springapp.model.Event;
import com.example.springapp.service.TicketService;
import com.example.springapp.service.AttendeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@RequestMapping("/ticket")
@CrossOrigin(value = "http://localhost:8081")
public class TicketController {

    private final TicketService ticketService;
    private final AttendeeService attendeeService;

    public TicketController(TicketService ticketService,AttendeeService attendeeService) {
        this.ticketService = ticketService;
        this.attendeeService = attendeeService;
    }

    @PostMapping
    public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
        // create attendee
        Attendee attendee = ticket.getAttendee();
        Event event = ticket.getEvent();
    
        Attendee createdAttendee = attendeeService.createAttendee(attendee);
        
        List<Attendee> attendees = event.getAttendees();
        attendees.add(attendee);
        event.setAttendees(attendees);

        Ticket createdTicket = ticketService.createTicket(ticket);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTicket);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ORGANISER', 'ROLE_ADMIN')")
    public ResponseEntity<Ticket> getTicketById(@PathVariable("id") Long id) {
        Ticket ticket = ticketService.getTicketById(id);
        if (ticket != null) {
            return ResponseEntity.ok(ticket);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping(params="eventId")
    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ORGANISER', 'ROLE_ADMIN')")
    public ResponseEntity<List<Ticket>> getTicketByEventId(@RequestParam("eventId") Long eventId) {
        List<Ticket> tickets = ticketService.getTicketByEventId(eventId);
        return ResponseEntity.ok(tickets);
    }

    @GetMapping("/{attendeeId}")
    @PreAuthorize("hasAnyRole('ROLE_ORGANISER', 'ROLE_ADMIN')")
    public ResponseEntity<List<Ticket>> getTicketByAttendeeId(@RequestParam("attendeeId") Long attendeeId) {
        List<Ticket> tickets = ticketService.getTicketByAttendeeId(attendeeId);
        return ResponseEntity.ok(tickets);
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_ORGANISER', 'ROLE_ADMIN')")
    public ResponseEntity<List<Ticket>> getAllTickets() {
        List<Ticket> tickets = ticketService.getAllTicket();
        return ResponseEntity.ok(tickets);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ORGANISER', 'ROLE_ADMIN')")
    public ResponseEntity<Ticket> updateTicket(@PathVariable("id") Long id, @RequestBody Ticket ticket) {
        Ticket existingTicket = ticketService.getTicketById(id);
        if (existingTicket != null) {
            ticket.setId(id);
            Ticket updatedTicket = ticketService.updateTicket(ticket);
            return ResponseEntity.ok(updatedTicket);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ORGANISER', 'ROLE_ADMIN')")
    public ResponseEntity<Void> deleteTicket(@PathVariable("id") Long id) {
        boolean isDeleted = ticketService.deleteTicket(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
