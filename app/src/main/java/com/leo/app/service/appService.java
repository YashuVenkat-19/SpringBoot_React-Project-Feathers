package com.leo.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leo.app.entity.App;
import com.leo.app.repository.appRepository;

@Service
public class appService {
	@Autowired
	private appRepository app;
	
	public List<App>getAllDetails()
	{
		return app.findAll();
	}
	
	public Optional<App> getAllDetails(int id)
	{
		return app.findById(id);
	}
	
	public App  addDetails(App a)
	{
		return app.save(a);
	}
	
	public String changeDetails(App a) 
	{
		app.save(a);
		return "updated";
	}
	
	public void deleteDetails(int id)
	{
		app.deleteById(id);
	}
}
