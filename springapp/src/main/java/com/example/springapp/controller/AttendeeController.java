package com.example.springapp.controller;

import com.example.springapp.model.Attendee;
import com.example.springapp.service.AttendeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@RequestMapping("/attendee")
public class AttendeeController {

    private final AttendeeService attendeeService;

    public AttendeeController(AttendeeService attendeeService) {
        this.attendeeService = attendeeService;
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_ORGANISER')")
    public ResponseEntity<Attendee> createAttendee(@RequestBody Attendee attendee) {
        Attendee createdAttendee = attendeeService.createAttendee(attendee);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAttendee);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_ORGANISER')")
    public ResponseEntity<Attendee> getAttendeeById(@PathVariable("id") Long id) {
        Attendee attendee = attendeeService.getAttendeeById(id);
        if (attendee != null) {
            return ResponseEntity.ok(attendee);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/event/{eventId}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_ORGANISER')")
    public ResponseEntity<List<Attendee>> getAttendeeByEventId(@PathVariable("eventId") Long eventId) {
        List<Attendee> attendees = attendeeService.getAttendeeByEventId(eventId);
        return ResponseEntity.ok(attendees);
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_ORGANISER')")
    public ResponseEntity<List<Attendee>> getAllAttendee() {
        List<Attendee> attendees = attendeeService.getAllAttendee();
        return ResponseEntity.ok(attendees);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_ORGANISER')")
    public ResponseEntity<Attendee> updateAttendee(@PathVariable("id") Long id, @RequestBody Attendee attendee) {
        Attendee existingAttendee = attendeeService.getAttendeeById(id);
        if (existingAttendee != null) {
            attendee.setId(id);
            Attendee updatedAttendee = attendeeService.updateAttendee(attendee);
            return ResponseEntity.ok(updatedAttendee);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAttendee(@PathVariable("id") Long id) {
        boolean isDeleted = attendeeService.deleteAttendee(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}