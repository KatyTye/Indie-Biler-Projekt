// ------------------------ FETCHES ------------------------

fetch("/fetch/header.html")
	.then(res => res.text())
	.then(data => {
		document.querySelector("#top-content").innerHTML = data
	})

fetch("/fetch/footer.html")
	.then(res => res.text())
	.then(data => {
		document.querySelector("#bottom-content").innerHTML = data
	})

// ------------------------ CONSTS ------------------------

const headerDOM = document.querySelector("#top-content")
const burgerButtonDOM = document.querySelector("#burger-button")
const burgerMenuDOM = document.querySelector("#search-form")
const navSearchButtonDOM = document.querySelector("#navSearchButton")
const navigationMenu = document.querySelector("#top-content .navigation")

// ------------------------ EVENTS ------------------------

navSearchButtonDOM.addEventListener("click", () => {
	burgerMenuDOM.classList.toggle("none")

	if (!burgerMenuDOM.classList.contains("none")) {
		navSearchButtonDOM.style.fontWeight = "bold"
		navSearchButtonDOM.style.textDecoration = "underline"
	} else {
		navSearchButtonDOM.style.fontWeight = ""
		navSearchButtonDOM.style.textDecoration = ""
	}

})

burgerButtonDOM.addEventListener("click", () => {
	if (navigationMenu.classList.contains("hiddenOnPhone")) {
		navigationMenu.classList.remove("hiddenOnPhone")
		headerDOM.style.minHeight = "fit-content"
		burgerMenuDOM.classList.remove("none")
	} else {
		navigationMenu.classList.add("hiddenOnPhone")
		headerDOM.style.minHeight = ""
		burgerMenuDOM.classList.add("none")
	}
})

// ------------------------ FUNCTIONS ------------------------

function changePage(page) {
	document.location = page
}