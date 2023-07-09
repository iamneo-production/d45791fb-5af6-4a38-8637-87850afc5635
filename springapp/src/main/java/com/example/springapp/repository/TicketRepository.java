package com.example.springapp.repository;

import java.util.List;
import com.example.springapp.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    public List<Ticket> findByEventId(long eventId);

    public List<Ticket> findByAttendeeId(long attendeeId);
}
