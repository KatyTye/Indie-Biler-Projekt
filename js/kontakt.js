const formDOM = document.querySelector("#contact-form")
const sellDOM = document.querySelector("#sell-page")
const repairDOM = document.querySelector("#repair")
const contentDOM = document.querySelector("#content .top-image")

sellDOM.style.display = "none"
repairDOM.style.display = "none"


if (location.href.includes("salg=true")) {
	formDOM.style.display = "none"
	sellDOM.style.display = ""
	contentDOM.classList.add("mask")
} else if (location.href.includes("rep=true")) {
	formDOM.style.display = "none"
	repairDOM.classList.remove("none")
	contentDOM.classList.add("mask")
}

formDOM.addEventListener("submit", (event) => {
	event.preventDefault();
	formDOM.style.display = "none"
	contentDOM.classList.add("mask")
	contentDOM.innerHTML += `<h2>TAK FOR DIN BESKED ${formDOM.elements.navn.value.toUpperCase()}</h2><p>Du får svar via e-mail snarest mulidt.</p>`
})