package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import javax.persistence.Table;
import javax.persistence.Column;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name="category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="category_id")
    private Long id;
    @Column(name="categoryName")
    private String categoryName;
    @Column(name="categoryImageUrl")
    private String categoryImageUrl;
    @Column(name="categoryDescription")
    private String categoryDescription;


    public Category(Long id, String categoryName, String categoryImageUrl, String categoryDescription) {
        this.id = id;
        this.categoryName = categoryName;
        this.categoryImageUrl = categoryImageUrl;
        this.categoryDescription = categoryDescription;
    }
    
}
