package com.example.springapp.request;

import javax.validation.constraints.Size;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

public class LogInRequest {
    @NotEmpty
    @Email
    public String email;
    @NotEmpty
    @Size(max = 20, min = 5, message = "Password should be between 5 and 20 letters")
    public String password;
    @NotEmpty
    public String role;

}
