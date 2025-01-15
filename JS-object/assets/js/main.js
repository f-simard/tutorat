import Person from "./classes/Person.js";
import Prof from "./classes/Prof.js";

const person1 = new Person('Simard', 'Filippa', 29);
const person2 = new Person('Bedard', 'Max', 30);

const prof = new Prof('Bouchard', 'Eddie', 52, 100)

console.log(prof.prenom, prof.salary)

// person1.saluer();
// const nouvelAge = person1.ageFuture(4);
// console.log(`Dans 4 ans, Filippa aura ${nouvelAge} ans`)
