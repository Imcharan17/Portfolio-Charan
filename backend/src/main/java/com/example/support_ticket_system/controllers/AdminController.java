package com.example.support_ticket_system.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import com.example.support_ticket_system.models.Ticket;
import com.example.support_ticket_system.models.User;
import com.example.support_ticket_system.repository.TicketRepository;
@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired private TicketRepository ticketRepository;
    @GetMapping("/unresolved")
    public ResponseEntity<?> getUnresolvedTickets(Authentication authentication){
        if(authentication==null || !(authentication.getPrincipal() instanceof User)) return ResponseEntity.status(403).body("Unauthorized");
        User user = (User) authentication.getPrincipal();
        if(!"ADMIN".equalsIgnoreCase(user.getRole())) return ResponseEntity.status(403).body("Only Admin");
        List<Ticket> unresolved = ticketRepository.findByStatus("Open"); return ResponseEntity.ok(unresolved);
    }
    @GetMapping("/summary")
    public ResponseEntity<?> getWeeklySummary(Authentication authentication){
        if(authentication==null || !(authentication.getPrincipal() instanceof User)) return ResponseEntity.status(403).body("Unauthorized");
        User user = (User) authentication.getPrincipal();
        if(!"ADMIN".equalsIgnoreCase(user.getRole())) return ResponseEntity.status(403).body("Only Admin");
        return ResponseEntity.ok("Weekly AI summary via n8n");
    }
}
