package com.example.support_ticket_system.repository;
import com.example.support_ticket_system.models.Ticket;
import com.example.support_ticket_system.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    List<Ticket> findByUser(User user);
    List<Ticket> findByStatus(String status);
}
