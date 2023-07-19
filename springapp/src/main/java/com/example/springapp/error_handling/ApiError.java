package com.example.springapp.error_handling;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.http.HttpStatus;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonTypeInfo(include = JsonTypeInfo.As.WRAPPER_OBJECT, use = JsonTypeInfo.Id.DEDUCTION, property = "error", visible = true)
public class ApiError {
    private HttpStatus httpStatus;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime timestamp;
    private String message;
    private String debugMessage;
    private List<ApiSubErrors> subErrors;

    // Constructors
    public ApiError() {
        timestamp = LocalDateTime.now();
    }

    public ApiError(HttpStatus status) {
        this();
        httpStatus = status;
    }

    public ApiError(HttpStatus status, Throwable ex) {
        this(status);
        message = "Unexpected Error";
        debugMessage = ex.getLocalizedMessage();
    }

    public ApiError(HttpStatus status, String msg, Throwable ex) {
        this(status);
        message = msg;
        debugMessage = ex.getLocalizedMessage();
    }

}
