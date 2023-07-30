package com.example.springapp.repository;

import java.util.List;
import com.example.springapp.model.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendeeRepository extends JpaRepository<Attendee, Long> {

    public List<Attendee> findByEventId(long id);

    public List<Attendee> findByUserId(long id);
}
