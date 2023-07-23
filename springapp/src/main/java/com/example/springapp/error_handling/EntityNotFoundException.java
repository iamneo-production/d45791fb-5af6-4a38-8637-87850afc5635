package com.example.springapp.error_handling;

//Happens when the no database Entity is found
// Spring Boot by default doesnt catch em
public class EntityNotFoundException extends RuntimeException {
    private String message;

    public EntityNotFoundException(String msg) {
        message = msg;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
