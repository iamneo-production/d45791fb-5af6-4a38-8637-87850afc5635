package com.example.springapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    public Optional<User> findByEmailIgnoreCase(String email);
}
