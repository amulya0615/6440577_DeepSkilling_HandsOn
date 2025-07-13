package com.cognizant.springlearn;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "✅ Welcome to Spring Learn Application!";
    }

    @GetMapping("/hello")
    public String hello() {
        return "👋 Hello from Spring Boot!";
    }
}

