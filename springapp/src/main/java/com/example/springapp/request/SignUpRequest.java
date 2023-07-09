package com.example.springapp.request;

import javax.validation.constraints.Email;

// import java.time.LocalDate;

import javax.validation.constraints.Size;

public class SignUpRequest {
    @Size(min = 4, max = 20)
    public String name;
    @Size(min = 10, max = 10)
    public String phone;
    @Size(min = 2, max = 20)
    public String role;
    @Email
    public String email;
    @Size(max = 20, min = 5, message = "Password should be between 5 and 20 letters")
    public String password;
    // @Size(min = 2, max = 20)
    // public String gender;
    // @Size(min = 2, max = 20)
    // public LocalDate dob;
    // @Size(min = 2, max = 20)
    // public String identity;

}
