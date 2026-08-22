package com.example.support_ticket_system.controllers;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import com.example.support_ticket_system.models.Ticket;
import com.example.support_ticket_system.models.User;
import com.example.support_ticket_system.repository.TicketRepository;
@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    @Autowired private TicketRepository ticketRepository;
    @PostMapping("/create")
    public ResponseEntity<?> createTicket(@RequestBody Ticket ticket, Authentication authentication){
        try{ if(authentication==null || !(authentication.getPrincipal() instanceof User)) return ResponseEntity.status(403).body("Unauthorized");
            User user = (User) authentication.getPrincipal();
            ticket.setUser(user); ticket.setStatus("Open"); ticket.setCreatedAt(LocalDateTime.now()); ticketRepository.save(ticket);
            return ResponseEntity.ok("Ticket created successfully!"); } catch(Exception e){ e.printStackTrace(); return ResponseEntity.internalServerError().body("Create failed: "+e.getMessage()); }
    }
    @GetMapping("/my")
    public ResponseEntity<?> getMyTickets(Authentication authentication){
        try{ if(authentication==null || !(authentication.getPrincipal() instanceof User)) return ResponseEntity.status(403).body("Unauthorized");
            User user = (User) authentication.getPrincipal(); List<Ticket> tickets = ticketRepository.findByUser(user); return ResponseEntity.ok(tickets); } catch(Exception e){ e.printStackTrace(); return ResponseEntity.internalServerError().body("Fetch failed: "+e.getMessage()); }
    }
}
