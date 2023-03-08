package com.leo.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.leo.app.entity.App;
import com.leo.app.service.appService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class appController 
{	
	@Autowired
	private appService appse;
	
	@GetMapping ("/get")
	public List<App>getDetails()
	{
		return appse.getAllDetails();
	}
	@GetMapping("/get/{id}")
	public Optional<App> getDetails(@PathVariable int id)
	{
		return appse.getAllDetails(id);
	}
	@PostMapping("/post")
	public App postDetails (@RequestBody App a)
	{
//		System.out.print(a.college_name);
		return appse.addDetails(a);
	
	}
	@PutMapping("/put/{id}")
	public String putDetails(@RequestBody App a) {
		return appse.changeDetails(a);
	}
	
	@DeleteMapping("/del/{id}")
	public void deletedetails(@PathVariable int id)
	{
		appse.deleteDetails(id);
	}
}