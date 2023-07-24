package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.springapp.model.Event;
import com.example.springapp.repository.EventRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;


    public void createEvent(Event event) {
        eventRepository.save(event);
    }

    public Event updateEvent(Event event) {
    	
        return eventRepository.save(event);
    }

    public boolean deleteEvent(Long id) {
        Optional<Event> eventOptional = eventRepository.findById(id);
        if (eventOptional.isPresent()) {
            eventRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Event> getAllEvent() {
        return eventRepository.findAll();
    }

    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElse(null);
    }
}