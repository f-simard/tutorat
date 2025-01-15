import Person from "./Person.js";

export default class Prof extends Person{
	constructor(nom, prenom, age, salary){
		super(nom, prenom, age);
		this.salary = salary;
	}

}