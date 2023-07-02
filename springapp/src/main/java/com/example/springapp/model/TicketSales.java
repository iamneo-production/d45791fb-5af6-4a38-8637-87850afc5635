package com.example.springapp.model;

public class TicketSales {

    private Long id;
    private String totalTicketsBooked;
    private String availableTickets;
    private String noOfAttendees;
    private Long eventId;
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

    // Constructors, getters, and setters

    
}
