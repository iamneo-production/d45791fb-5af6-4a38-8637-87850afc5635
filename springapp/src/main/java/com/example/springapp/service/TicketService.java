package com.example.springapp.service;

import com.example.springapp.model.Ticket;
import com.example.springapp.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;

    @Autowired
    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public Ticket createTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public Ticket getTicketById(Long id) {
        return ticketRepository.findById(id).orElse(null);
    }

    public List<Ticket> getTicketByEventId(Long eventId) {
        return ticketRepository.findByEventId(eventId);
    }

    public List<Ticket> getTicketByAttendeeId(Long attendeeId) {
        return ticketRepository.findByAttendeeId(attendeeId);
    }

    public List<Ticket> getAllTicket() {
        return ticketRepository.findAll();
    }

    public Ticket updateTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public boolean deleteTicket(Long id) {
        if (ticketRepository.existsById(id)) {
            ticketRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Additional methods based on your requirements
}
