const btn_clickMe = document.querySelector(".click") as HTMLButtonElement;
const btn_danger = document.querySelector(".danger") as HTMLButtonElement;
const input_name = document.querySelector(".js_name") as HTMLInputElement;
const inputs = document.querySelectorAll("input") as NodeList;
const section = document.querySelector("section") as HTMLElement;

btn_clickMe.addEventListener("click", afficherSection);
input_name.addEventListener("change", afficherSalution);

function afficherSection(): void {
	section.classList.add("visible");
	section.classList.remove("invisible");

	changerCouleur();
}

function changerCouleur(){
	section.classList.add("bg-red");
}

function afficherSalution(event: Event): void {
	const declencheur = event.currentTarget as HTMLInputElement;
	const name = declencheur.value;

	console.log(`Allo ${name}`);
}