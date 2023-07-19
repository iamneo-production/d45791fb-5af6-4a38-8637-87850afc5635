package com.example.springapp.util;

import com.example.springapp.CustomUserDetails;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import org.springframework.stereotype.Service;

@Service
public class JwtUtil {

  private Key getSigningKey() {
    byte[] keyBytes = this.secretkey.getBytes(StandardCharsets.UTF_8);
    return Keys.hmacShaKeyFor(keyBytes);
  }

  private String secretkey = "07c73e9bb13f0f22f411d5079e7c0d50555c929eea5a833d539fcf318610b79a";

  public String extractEmail(String token) {
    return extractClaim(token, Claims::getSubject);
  }

  public Date extractExpiration(String token) {
    return extractClaim(token, Claims::getExpiration);
  }

  public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
    final Claims claims = extractAllClaims(token);
    return claimsResolver.apply(claims);
  }

  private Claims extractAllClaims(String token) {
    return Jwts.parserBuilder()
        .setSigningKey(getSigningKey())
        .build()
        .parseClaimsJws(token)
        .getBody();
  }

  private Boolean isTokenExpired(String token) {
    return extractExpiration(token).before(new Date());
  }

  public String generateToken(CustomUserDetails userDetails) {
    Map<String, Object> claims = new HashMap<>();

    return createToken(claims, userDetails.getUsername(),
        userDetails.getAuthorities().toArray()[0].toString());
  }

  private String createToken(Map<String, Object> claims, String email,
      String role) {

    claims.put("role", role);

    return Jwts.builder()
        .setClaims(claims)
        .setSubject(email)
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(
            new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
        .signWith(getSigningKey())
        .compact();

  }

  public Boolean validateToken(String token, CustomUserDetails userDetails) {
    final String username = extractEmail(token);
    return (username.equals(userDetails.getUsername()) &&
        !isTokenExpired(token));
  }
}
