package com.example.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.FetchType;


import java.util.Date;
import java.util.List;

import com.example.springapp.model.User;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name="event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="event_id")
    private Long id;
    @Column(name="name")
	private String name;
    @Column(name="shortDescription")
    private String shortDescription;
    @Column(name="description")
    private String description;
    @Column(name="location")
    private String location;
    @Column(name="startDate")
    private Date startDate;

    @JsonIgnoreProperties("events")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="organizer_id")
    private User organiser;

    @Column(name="endDate")
    private Date endDate;
    @Column(name="speakerName")
    private String speakerName;
    @Column(name="speakerExpertise")
    private String speakerExpertise;
    @Column(name="speakerAffiliations")
    private String speakerAffiliations;
    @Column(name="speakerAccomplishments")
    private String speakerAccomplishments;
    @Column(name="speakerBiography")
    private String speakerBiography;
    @Column(name="price")
    private int price;
    @Column(name="totalTickets")
    private Long totalTickets;
    @Column(name="imgUrl")
    private String imgUrl;
    
    @OneToMany(mappedBy = "event")
    @Column(name="attendees")
    private List<Attendee> attendees;

    @OneToMany(mappedBy = "event")
    @Column(name="tickets")
    private List<Ticket> tickets;
    
    
    
    
    
    public Event(Long id, String name, String description, Date startDate, Date endDate, String location,
            Long totalTickets) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalTickets = totalTickets;
    }

    public Event(String name,String shortDescription, String description, String location, String speakerName,Date startDate,Date endDate,
			String speakerExpertise, String speakerAffiliations, String speakerAccomplishments, String speakerBiography,
			int price, Long totalTickets, String imgUrl) {
		super();
        this.shortDescription=shortDescription;
		this.name = name;
		this.description = description;
	    this.startDate = startDate;
      	this.endDate = endDate;
		this.location = location;
		this.speakerName = speakerName;
		this.speakerExpertise = speakerExpertise;
		this.speakerAffiliations = speakerAffiliations;
		this.speakerAccomplishments = speakerAccomplishments;
		this.speakerBiography = speakerBiography;
		this.price = price;
		this.totalTickets = totalTickets;
		this.imgUrl = imgUrl;
	}

	
    

}