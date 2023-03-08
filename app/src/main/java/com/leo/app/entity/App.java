package com.leo.app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="institutions")

public class App {
	@Id
	private int collegeId;
	private String collegeName;
	private String CEO;
	private int performance;
	private int teaching;
	private int research;
	private int professionalPractice;
	private int graduationOutcome;
	private int nirfRank;
	public App() {}
	public App(int collegeId,String collegeName,String CEO,int performance,int teaching,int research,int professionalPractice,int graduationOutcome,int NIRFRank)
	{
		super();
		this.collegeId=collegeId;
		this.collegeName=collegeName;
		this.CEO=CEO;
		this.performance=performance;
		this.teaching=teaching;
		this.research=research;
		this.professionalPractice=professionalPractice;
		this.graduationOutcome=graduationOutcome;
		this.nirfRank=NIRFRank;
	}
	public int getCollegeId() {
		return collegeId;
	}
	public void setCollegeId(int collegeId) {
		this.collegeId = collegeId;
	}
	public String getCollegeName() {
		return collegeName;
	}
	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
	public int getPerformance() {
		return performance;
	}
	public void setPerformance(int performance) {
		this.performance = performance;
	}
	public int getTeaching() {
		return teaching;
	}
	public void setTeaching(int teaching) {
		this.teaching = teaching;
	}
	public int getResearch() {
		return research;
	}
	public void setResearch(int research) {
		this.research = research;
	}
	public int getProfessionalPractice() {
		return professionalPractice;
	}
	public void setProfessionalPractice(int professionalPractice) {
		this.professionalPractice = professionalPractice;
	}
	public int getGraduationOutcome() {
		return graduationOutcome;
	}
	public void setGraduationOutcome(int graduationOutcome) {
		this.graduationOutcome = graduationOutcome;
	}
	public String getCEO() {
		return CEO;
	}
	public void setCEO(String cEO) {
		CEO = cEO;
	}
	public int getNirfRank() {
		return nirfRank;
	}
	public void setNirfRank(int nirfRank) {
		this.nirfRank = nirfRank;
	}
	
	
	
	
}
