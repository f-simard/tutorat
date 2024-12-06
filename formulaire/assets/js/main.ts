const formHTML = document.querySelector("form") as HTMLFormElement;
const inputName = document.querySelector("[name='nom']") as HTMLInputElement;
const inputAge = document.querySelector("[name='age']") as HTMLInputElement;
const inputConditions = document.querySelector(
	"[name='acceptedCondition']"
) as HTMLInputElement;

formHTML.addEventListener("submit", formfunction);

function formfunction(event: SubmitEvent): void {
	console.log("soumis");
	event.preventDefault();

	if (inputName.value.length < 10) {
		console.log("name trop court");
	}

	const spanErreurAge = document.querySelector("[data-champ='age']") as HTMLSpanElement;

	if (parseInt(inputAge.value) < 18) {
		spanErreurAge.classList.remove("invisible")
	} else {
		spanErreurAge.classList.add("invisible")
	}

	console.log("condition acceptee", inputConditions.checked);
}
