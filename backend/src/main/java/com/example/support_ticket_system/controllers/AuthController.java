package com.example.support_ticket_system.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.support_ticket_system.models.User;
import com.example.support_ticket_system.repository.UserRepository;
import com.example.support_ticket_system.config.JwtUtil;
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired private UserRepository userRepository;
    @Autowired private JwtUtil jwtUtil;
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        try{ if(userRepository.existsByEmail(user.getEmail())) return ResponseEntity.badRequest().body("Email already exists!");
            if(user.getRole()==null||user.getRole().isEmpty()) user.setRole("USER");
            userRepository.save(user); return ResponseEntity.ok("User registered successfully!"); } catch(Exception e){ e.printStackTrace(); return ResponseEntity.internalServerError().body("Registration failed: "+e.getMessage()); }
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user){
        try{ com.example.support_ticket_system.models.User existing = userRepository.findByEmail(user.getEmail()).orElse(null);
            if(existing!=null && existing.getPassword().equals(user.getPassword())) { String token = jwtUtil.generateToken(existing.getEmail()); return ResponseEntity.ok("{"token":""+token+"","role":""+existing.getRole()+""}"); }
            return ResponseEntity.status(401).body("Invalid credentials!"); } catch(Exception e){ e.printStackTrace(); return ResponseEntity.internalServerError().body("Login failed: "+e.getMessage()); }
    }
}
