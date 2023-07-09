package com.example.springapp.model;

import javax.persistence.*;


@Entity
@Table(name="ticketSales")
public class TicketSales {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ticket_sales_id")
    private Long id;
    @Column(name="totalTicketsBooked")
    private String totalTicketsBooked;
    @Column(name="availableTickets")
    private String availableTickets;
    @Column(name="noOfAttendees")
    private String noOfAttendees;

    @Column(name="event_id")
    private Long eventId;
    @Column(name="totalPrice")
    private Double totalPrice;

    
    public TicketSales() {
    }
    public TicketSales(Long id, String totalTicketsBooked, String availableTickets, String noOfAttendees, Long eventId,
            Double totalPrice) {
        this.id = id;
        this.totalTicketsBooked = totalTicketsBooked;
        this.availableTickets = availableTickets;
        this.noOfAttendees = noOfAttendees;
        this.eventId = eventId;
        this.totalPrice = totalPrice;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTotalTicketsBooked() {
        return totalTicketsBooked;
    }
    public void setTotalTicketsBooked(String totalTicketsBooked) {
        this.totalTicketsBooked = totalTicketsBooked;
    }
    public String getAvailableTickets() {
        return availableTickets;
    }
    public void setAvailableTickets(String availableTickets) {
        this.availableTickets = availableTickets;
    }
    public String getNoOfAttendees() {
        return noOfAttendees;
    }
    public void setNoOfAttendees(String noOfAttendees) {
        this.noOfAttendees = noOfAttendees;
    }
    public Long getEventId() {
        return eventId;
    }
    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }
    public Double getTotalPrice() {
        return totalPrice;
    }
    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

}
