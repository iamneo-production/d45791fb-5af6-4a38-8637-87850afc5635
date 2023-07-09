package com.example.springapp.request;

import javax.validation.constraints.Size;

public class LogInRequest {

    public String email;
    @Size(max = 20, min = 5, message = "Password should be between 5 and 20 letters")
    public String password;
}
