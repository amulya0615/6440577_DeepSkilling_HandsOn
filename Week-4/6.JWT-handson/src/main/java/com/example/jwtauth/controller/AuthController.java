package com.example.jwtauth.controller;

import com.example.jwtauth.util.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import java.util.Base64;

@RestController
public class AuthController {

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        System.out.println(">>> /authenticate endpoint HIT");

        String authHeader = request.getHeader("Authorization");
        System.out.println("Authorization Header: " + authHeader); // Debug line

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length());
            System.out.println("Base64 Encoded Credentials: " + base64Credentials); // Debug line

            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded);
            System.out.println("Decoded Credentials: " + credentials); // Debug line

            String[] values = credentials.split(":", 2);

            if (values.length < 2) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\": \"Malformed credentials\"}");
            }

            String username = values[0];
            String password = values[1];

            System.out.println("Username: " + username + " | Password: " + password); // Debug line

            if (username.equals("user") && password.equals("pwd")) {
                String token = "dummy-jwt-token-for-" + username;
                System.out.println("Generated Token: " + token); // Debug line
                return ResponseEntity.ok("{\"token\":\"" + token + "\"}");
            } else {
                System.out.println("❌ Invalid credentials");
            }
        } else {
            System.out.println("❌ No Authorization header or wrong format");
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Unauthorized\"}");
    }
}
