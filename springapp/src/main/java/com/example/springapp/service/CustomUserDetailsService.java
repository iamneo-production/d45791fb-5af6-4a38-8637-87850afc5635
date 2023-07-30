package com.example.springapp.service;

import com.example.springapp.CustomUserDetails;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

  @Autowired
  private UserRepository userRepository;

  @Override
  public CustomUserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

    Optional<User> user = userRepository.findByEmailIgnoreCase(email);

    User foundUser = user.orElseThrow(() -> new UsernameNotFoundException("User Not Found"));

    return new CustomUserDetails(foundUser);
  }
}

