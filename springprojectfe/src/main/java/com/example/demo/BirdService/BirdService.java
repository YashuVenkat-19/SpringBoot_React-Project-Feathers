package com.example.demo.BirdService;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.BirdEntity.Bird;
import com.example.demo.BirdRepository.BirdRepo;

@Service
public class BirdService {
	@Autowired
	private BirdRepo birdrepo;
	
	public List<Bird> getAllBirds(){
		return birdrepo.findAll();
	}
	
	public Bird postBird(Bird b) {
		return birdrepo.save(b);
	}
	
	public Optional<Bird> getBirdById(int id) {
		return birdrepo.findById(id);
	}
	
	public void deleteBird(int id) {
		birdrepo.deleteById(id);
	}
	

	public Bird updateBird(int id,Bird bi) {
		Bird b = birdrepo.findById(id).get();
		if((Objects.nonNull(b)) && (!(Objects.isNull(bi.getBirdname()))))
		{
			b.setBirdname(bi.getBirdname());
		}
		
		if((Objects.nonNull(b)) && (!(Objects.isNull(bi.getBirdcolor()))))
		{
			b.setBirdcolor(bi.getBirdcolor());
		}
		
		if((Objects.nonNull(b)) && (!(Objects.isNull(bi.getSanctuaryname()))))
		{
			b.setSanctuaryname(bi.getSanctuaryname());
		}
		
		if((Objects.nonNull(b)) && (!(Objects.isNull(bi.getBirdheight()))))
		{
			b.setBirdheight(bi.getBirdheight());
		}
		
		if((Objects.nonNull(b)) && (!(Objects.isNull(bi.getSanctuarystate()))))
		{
			b.setSanctuarystate(bi.getSanctuarystate());
		}
		
		if((Objects.nonNull(b)) && (!(Objects.isNull(bi.getBirdcount()))))
		{
			b.setBirdcount(bi.getBirdcount());
		}
		
		if((Objects.nonNull(b)) && (!(Objects.isNull(bi.getHabitat()))))
		{
			b.setHabitat(bi.getHabitat());
		}
		
		if((Objects.nonNull(b)) && (!(Objects.isNull(bi.getHabitat()))))
		{
			b.setHabitat(bi.getHabitat());
		}
		
		if((Objects.nonNull(b)) && (!(bi.getId()==0)))
		{
			b.setId(bi.getId());
		}
		
		return birdrepo.saveAndFlush(b);		
	}
}
