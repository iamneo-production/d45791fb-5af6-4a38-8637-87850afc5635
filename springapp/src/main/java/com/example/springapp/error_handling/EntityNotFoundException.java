package com.example.springapp.error_handling;

//Happens when the no database Entity is found
// Spring Boot by default doesnt catch em

public class EntityNotFoundException extends RuntimeException {
    private final String message;

    public EntityNotFoundException(String msg) {
        message = msg;
    }

    @Override
    public String getMessage() {
        return this.message;
    }

}
