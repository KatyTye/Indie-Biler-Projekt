const burgerButtonDOM = document.querySelector("#burger-button")
const burgerMenuDOM = document.querySelector("#search-form")
const navigationMenu = document.querySelector("#top-content .navigation")

burgerButtonDOM.addEventListener("click", () => {
	console.log("click")
	if (navigationMenu.classList.contains("hiddenOnPhone")) {
		navigationMenu.classList.remove("hiddenOnPhone")
		burgerMenuDOM.classList.remove("none")
	} else {
		navigationMenu.classList.add("hiddenOnPhone")
		burgerMenuDOM.classList.add("none")
	}
})