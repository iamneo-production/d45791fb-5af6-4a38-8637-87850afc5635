package com.example.springapp.repository;

import com.example.springapp.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {

    public List<Event> getEventsByOrganiserId(Long id);
}
