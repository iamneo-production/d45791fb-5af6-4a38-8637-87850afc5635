package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.springapp.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    // You can define custom queries here if needed
}
