export default class Person {
	
	constructor(nom, prenom, age) {
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;

		this.injecterHTML();
	}

	/**
	 * fonction qui dit allo de ma part
	 */
	saluer() {
		console.log(`Allo, je m'appelle ${this.prenom}.`);
	}

	/**
	 * fonction qui additionne l'age
	 * @param {number} extra nfjwskhflwkjejfklwe
	 * @returns {number} age

	 */
	ageFuture(extra) {
		return this.age + extra;
	}

	injecterHTML() {
		let gabarit = `
         <div>
            <h2>Individu</h2>
				<ul>
				<li> ${this.prenom} ${this.nom}</li>
				<li>${this.age} ans</li>
				</ul>
         </div>
        `;

		const main = document.querySelector("main");

		main.insertAdjacentHTML("beforeend", gabarit);
		this.elementHTML = main.lastElementChild;
	}
}
