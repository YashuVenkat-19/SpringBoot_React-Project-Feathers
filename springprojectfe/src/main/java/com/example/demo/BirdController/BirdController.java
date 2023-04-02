package com.example.demo.BirdController;

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

import com.example.demo.BirdEntity.Bird;
import com.example.demo.BirdService.BirdService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class BirdController {
	
	@Autowired
	private BirdService birdservice;
	
	@GetMapping("/get")
	public List<Bird> getAllBirds() {
		return birdservice.getAllBirds();
	}
	
	@GetMapping("/get/{id}")
	public Optional<Bird> getBirdsById(@PathVariable("id") int id) {
		return birdservice.getBirdById(id);
	} 
	
	@PostMapping("/add")
	public Bird postBirds(@RequestBody Bird b) {
		return birdservice.postBird(b);	
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteBird(@PathVariable("id") int id) {
		birdservice.deleteBird(id);
	}
	
	@PutMapping("/update/{id}")
	public Bird updateBird( @PathVariable("id") int id,@RequestBody Bird b) {
		return birdservice.updateBird(id,b);
	}

}
