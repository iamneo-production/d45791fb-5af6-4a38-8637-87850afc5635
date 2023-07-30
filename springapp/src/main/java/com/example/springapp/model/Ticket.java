package com.example.springapp.model;

import javax.persistence.*;

@Entity
@Table(name="ticket")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ticket_id")
    private Long id;

    @Column(name="status")
    private String status;
    @Column(name="price")
    private Double price;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

    @ManyToOne
    @JoinColumn(name = "attendee_id")
    private Attendee attendee;

    

    public Ticket() {
    }

    public Ticket(Long id, Double price, String status, Event event, Attendee attendee) {
        this.id = id;
        this.status = status;
        this.price = price;
        this.event = event;
        this.attendee = attendee;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Attendee getAttendee() {
        return attendee;
    }

    public void setAttendee(Attendee attendee) {
        this.attendee = attendee;
    }

    

    // Constructors, getters, and setters
}
