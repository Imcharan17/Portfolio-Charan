package com.example.support_ticket_system.models;
import jakarta.persistence.*;
import java.time.LocalDateTime;
@Entity
@Table(name = "tickets")
public class Ticket {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String category;
    private String priority;
    private String status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    @ManyToOne @JoinColumn(name="user_id")
    private User user;
    public Ticket() {}
    public Long getId(){return id;} public void setId(Long id){this.id=id;}
    public String getTitle(){return title;} public void setTitle(String t){this.title=t;}
    public String getDescription(){return description;} public void setDescription(String d){this.description=d;}
    public String getCategory(){return category;} public void setCategory(String c){this.category=c;}
    public String getPriority(){return priority;} public void setPriority(String p){this.priority=p;}
    public String getStatus(){return status;} public void setStatus(String s){this.status=s;}
    public java.time.LocalDateTime getCreatedAt(){return createdAt;} public void setCreatedAt(java.time.LocalDateTime c){this.createdAt=c;}
    public java.time.LocalDateTime getUpdatedAt(){return updatedAt;} public void setUpdatedAt(java.time.LocalDateTime u){this.updatedAt=u;}
    public User getUser(){return user;} public void setUser(User u){this.user=u;}
}
