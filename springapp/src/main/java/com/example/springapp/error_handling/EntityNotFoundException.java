package com.example.springapp.error_handling;

import lombok.Getter;
import lombok.Setter;

//Happens when the no database Entity is found
// Spring Boot by default doesnt catch em
@Getter
@Setter
public class EntityNotFoundException extends RuntimeException {
    private String message;

    public EntityNotFoundException(String msg) {
        message = msg;
    }

}
