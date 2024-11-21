"use strict";
const btn_clickMe = document.querySelector(".click");
const btn_danger = document.querySelector(".danger");
const input_name = document.querySelector(".js_name");
const inputs = document.querySelectorAll("input");
const section = document.querySelector("section");
btn_clickMe.addEventListener("click", afficherSection);
input_name.addEventListener("change", afficherSalution);
function afficherSection() {
    section.classList.add("visible");
    section.classList.remove("invisible");
    changerCouleur();
}
function changerCouleur() {
    section.classList.add("bg-red");
}
function afficherSalution(event) {
    const declencheur = event.currentTarget;
    const name = declencheur.value;
    console.log(`Allo ${name}`);
}
