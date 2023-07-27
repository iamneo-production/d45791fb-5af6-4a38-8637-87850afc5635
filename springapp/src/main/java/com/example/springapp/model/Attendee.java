package com.example.springapp.model;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonBackReference;
@Entity
@Table(name="attendee")
public class Attendee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="attendee_id")
    private Long id;

    @Column(name="name")
    private String name;
    @Column(name="email")
    private String email;
    @Column(name="phone")
    private String phone;
    @Column(name="address")
    private String address;


    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Attendee() {
        
    }

    public Attendee(Long id, String name, String email, String phone, String address, Event event) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.event = event;
    }

    public Attendee(Long id, String name, String email, String phone, String address, Event event, User user) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.event = event;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    @JsonBackReference
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    
}
