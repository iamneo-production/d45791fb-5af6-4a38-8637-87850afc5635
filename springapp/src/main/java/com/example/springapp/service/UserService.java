package com.example.springapp.service;

import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;    

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public User updateUser(User user) {
        Optional<User> optionalUser = userRepository.findById(user.getId());
        User update_user = optionalUser.get();
        update_user.setName(user.getName());
        update_user.setEmail(user.getEmail());
        update_user.setPhone(user.getPhone());
        update_user.setAddress(user.getAddress());
        
        return userRepository.save(update_user);
    }

    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
}