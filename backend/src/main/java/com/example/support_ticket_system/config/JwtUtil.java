package com.example.support_ticket_system.config;
import java.util.Date;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
@Component
public class JwtUtil {
    private static final String SECRET_KEY = "thisisaverysecretkeyforjwtvalidationthisisaverysecretkeyforjwtvalidation";
    public String generateToken(String email){
        return Jwts.builder().setSubject(email).setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis()+1000L*60*60)).signWith(Keys.hmacShaKeyFor(SECRET_KEY.getBytes())).compact();
    }
    public String extractEmail(String token){
        return Jwts.parserBuilder().setSigningKey(Keys.hmacShaKeyFor(SECRET_KEY.getBytes())).build().parseClaimsJws(token).getBody().getSubject();
    }
    public boolean validateToken(String token){
        try { Jwts.parserBuilder().setSigningKey(Keys.hmacShaKeyFor(SECRET_KEY.getBytes())).build().parseClaimsJws(token); return true; }
        catch (Exception e){ return false; }
    }
}
