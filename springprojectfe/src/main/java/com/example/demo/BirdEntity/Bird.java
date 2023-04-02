package com.example.demo.BirdEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="bird")
public class Bird {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="birdname")
	private String birdname;
	
	@Column(name="birdcolor")
	private String birdcolor;
	
	@Column(name="sanctuaryname")
	private String sanctuaryname;
	
	@Column(name="sanctuarystate")
	private String sanctuarystate;
	
	@Column(name="birdheight")
	private int birdheight;
	
	@Column(name="birdcount")
	private int birdcount;
	
	@Column(name="habitat")
	private String habitat;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBirdname() {
		return birdname;
	}

	public void setBirdname(String birdname) {
		this.birdname = birdname;
	}

	public String getBirdcolor() {
		return birdcolor;
	}

	public String getSanctuaryname() {
		return sanctuaryname;
	}

	public void setSanctuaryname(String sanctuaryname) {
		this.sanctuaryname = sanctuaryname;
	}

	public void setBirdcolor(String birdcolor) {
		this.birdcolor = birdcolor;
	}

	public String getSanctuarystate() {
		return sanctuarystate;
	}

	public void setSanctuarystate(String sanctuarystate) {
		this.sanctuarystate = sanctuarystate;
	}

	public int getBirdheight() {
		return birdheight;
	}

	public void setBirdheight(int birdheight) {
		this.birdheight = birdheight;
	}

	public int getBirdcount() {
		return birdcount;
	}

	public void setBirdcount(int birdcount) {
		this.birdcount = birdcount;
	}

	public String getHabitat() {
		return habitat;
	}

	public void setHabitat(String habitat) {
		this.habitat = habitat;
	}

	public Bird() {}

	public Bird(int id, String birdname, String birdcolor, String sanctuaryname, String sanctuarystate, int birdheight,
			int birdcount, String habitat) {
		super();
		this.id = id;
		this.birdname = birdname;
		this.birdcolor = birdcolor;
		this.sanctuaryname = sanctuaryname;
		this.sanctuarystate = sanctuarystate;
		this.birdheight = birdheight;
		this.birdcount = birdcount;
		this.habitat = habitat;
	}	
}
