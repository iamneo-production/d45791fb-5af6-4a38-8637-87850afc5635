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

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="event_id")
    private Long id;

    public Long getId() {
		return id;
	}

    @Column(name="name")
	private String name;
    @Column(name="description")
    private String description;
    @Column(name="location")
    private String location;
    @Column(name="startDate")
    private Date startDate;
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

    public Event(String name, String description, String location, String speakerName,Date startDate,Date endDate,
			String speakerExpertise, String speakerAffiliations, String speakerAccomplishments, String speakerBiography,
			int price, Long totalTickets, String imgUrl) {
		super();
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

	public String getSpeakerName() {
		return speakerName;
	}



	public void setSpeakerName(String speakerName) {
		this.speakerName = speakerName;
	}



	public String getSpeakerExpertise() {
		return speakerExpertise;
	}



	public void setSpeakerExpertise(String speakerExpertise) {
		this.speakerExpertise = speakerExpertise;
	}



	public String getSpeakerAffiliations() {
		return speakerAffiliations;
	}



	public void setSpeakerAffiliations(String speakerAffiliations) {
		this.speakerAffiliations = speakerAffiliations;
	}



	public String getSpeakerAccomplishments() {
		return speakerAccomplishments;
	}



	public void setSpeakerAccomplishments(String speakerAccomplishments) {
		this.speakerAccomplishments = speakerAccomplishments;
	}



	public String getSpeakerBiography() {
		return speakerBiography;
	}



	public void setSpeakerBiography(String speakerBiography) {
		this.speakerBiography = speakerBiography;
	}



	public int getPrice() {
		return price;
	}



	public void setPrice(int price) {
		this.price = price;
	}    

    public Event() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

   public Date getStartDate() {
       return startDate;
    }
   public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
       this.endDate = endDate;
   }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Long getTotalTickets() {
        return totalTickets;
    }

    public void setTotalTickets(Long totalTickets) {
        this.totalTickets = totalTickets;
    }

    public List<Attendee> getAttendees() {
        return attendees;
    }

    public void setAttendees(List<Attendee> attendees) {
        this.attendees = attendees;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public void setId(Long id2) {
		this.id=id2;
	}

    

}