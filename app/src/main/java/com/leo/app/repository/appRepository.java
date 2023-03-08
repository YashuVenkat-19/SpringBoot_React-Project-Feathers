package com.leo.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.leo.app.entity.App;

public interface appRepository extends JpaRepository<App, Integer> {

}
