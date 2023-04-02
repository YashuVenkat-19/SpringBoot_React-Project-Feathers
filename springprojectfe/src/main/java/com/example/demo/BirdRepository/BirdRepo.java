package com.example.demo.BirdRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.BirdEntity.Bird;

public interface BirdRepo extends JpaRepository<Bird,Integer> {

}
