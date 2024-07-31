package com.skillstorm.project1.exceptions;

public class ApiException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public ApiException() {
    }

    public ApiException(String message) {
        super(message);
    } 
}
