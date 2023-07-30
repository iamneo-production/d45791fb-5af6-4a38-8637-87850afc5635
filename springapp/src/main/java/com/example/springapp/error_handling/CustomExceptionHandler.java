package com.example.springapp.error_handling;

import org.springframework.http.ResponseEntity;

// Custom exception handler for the app
// since Spring-boot sends its own which
// is inconsisent
public interface CustomExceptionHandler {
    public ResponseEntity<Object> buildResponseEntity(ApiError err);
}
