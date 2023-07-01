package com.example.springapp.service;

import com.example.springapp.model.Attendee;
import com.example.springapp.repository.AttendeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendeeService {

    private final AttendeeRepository attendeeRepository;

    @Autowired
    public AttendeeService(AttendeeRepository attendeeRepository) {
        this.attendeeRepository = attendeeRepository;
    }

    public Attendee createAttendee(Attendee attendee) {
        return attendeeRepository.save(attendee);
    }

    public Attendee getAttendeeById(Long id) {
        return attendeeRepository.findById(id).orElse(null);
    }

    public List<Attendee> getAttendeeByEventId(Long eventId) {
        return attendeeRepository.findByEventId(eventId);
    }

    public List<Attendee> getAllAttendee() {
        return attendeeRepository.findAll();
    }

    public Attendee updateAttendee(Attendee attendee) {
        return attendeeRepository.save(attendee);
    }

    public boolean deleteAttendee(Long id) {
        if (attendeeRepository.existsById(id)) {
            attendeeRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Additional methods based on your requirements
}
