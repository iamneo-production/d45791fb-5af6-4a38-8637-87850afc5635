package com.example.springapp.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

// import java.time.LocalDate;

import javax.validation.constraints.Size;

public class SignUpRequest {
    @NotEmpty
    @Size(min = 4, max = 20)
    public String name;
    @Size(min = 10, max = 10)
    @NotEmpty
    public String phone;
    @Size(min = 2, max = 20)
    @NotEmpty
    public String role;
    @Email
    @NotEmpty
    public String email;
    @NotEmpty
    @Size(max = 20, min = 5, message = "Password should be between 5 and 20 letters")
    public String password;
    // @Size(min = 2, max = 20)
    // public String gender;
    // @Size(min = 2, max = 20)
    // public LocalDate dob;
    // @Size(min = 2, max = 20)
    // public String identity;

}
