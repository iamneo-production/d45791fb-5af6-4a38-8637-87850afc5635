package com.example.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.OneToMany;

import com.example.springapp.model.Attendee;

import com.example.springapp.AccountRoles;
import com.example.springapp.request.SignUpRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "phone")
    private String phone;
    @Column(name = "address")
    private String address;
    @Column(name = "role")
    private String role;
    @Column(name = "password")
    @JsonIgnore
    private String password;
    
    @OneToMany(mappedBy = "user")
    @Column(name="attendee_list")
    private List<Attendee> attendee_list;

    public void setRole(AccountRoles role) {
        this.role = String.valueOf(role);
    }

    public void setAttendeeList(List<Attendee> attendee_list) {
        this.attendee_list = attendee_list;
    }

    @JsonManagedReference
    public List<Attendee> getAttendeeList() {
        return this.attendee_list;
    }

    public User() {

    }

    public User(SignUpRequest sr) {
        this.name = sr.name;
        this.email = sr.email;
        this.role = sr.role;
        this.phone = sr.phone;
        this.password = sr.password;

        // this.gender = sr.gender;
        // this.dob = sr.dob;
    }

    public User(String name, String email, String role, String phone, String password, List<Attendee> attendee_list) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.phone = phone;
        this.password = password;
        this.attendee_list = attendee_list;

        // this.gender = sr.gender;
        // this.dob = sr.dob;
    }
}
