"use strict";
const formHTML = document.querySelector("form");
const inputName = document.querySelector("[name='nom']");
const inputAge = document.querySelector("[name='age']");
const inputConditions = document.querySelector("[name='acceptedCondition']");
formHTML.addEventListener("submit", formfunction);
function formfunction(event) {
    console.log("soumis");
    event.preventDefault();
    if (inputName.value.length < 10) {
        console.log("name trop court");
    }
    const spanErreurAge = document.querySelector("[data-champ='age']");
    if (parseInt(inputAge.value) < 18) {
        spanErreurAge.classList.remove("invisible");
    }
    else {
        spanErreurAge.classList.add("invisible");
    }
    console.log("condition acceptee", inputConditions.checked);
}
