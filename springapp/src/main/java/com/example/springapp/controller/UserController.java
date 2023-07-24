package com.example.springapp.controller;

import com.example.springapp.model.User;
import com.example.springapp.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@CrossOrigin()
@RequestMapping("/user")
public class UserController {
    
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER' , 'ROLE_ORGANISER')")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        User user = userService.getUserById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER' ,'ROLE_ORGANISER')")
    public ResponseEntity<List<User>> getAllUser() {
        List<User> users = userService.getAllUser();
        return ResponseEntity.ok(users);
    }
    
    @PutMapping("/update/{id}")
    @PreAuthorize("hasAnyRole('ROLE_USER' ,'ROLE_ORGANISER')")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id, @RequestBody User user) {
        User existingUser = userService.getUserById(id);
        if (existingUser != null) {
            user.setId(id);
            User updatedUser = userService.updateUser(user);
            return ResponseEntity.ok(updatedUser);
        }
        return ResponseEntity.notFound().build();
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/{id}")
    public boolean deleteUser(@PathVariable Long id){
        return userService.deleteUser(id);
    }
}
