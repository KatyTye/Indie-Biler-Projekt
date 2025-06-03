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

setTimeout(() => {


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
}, 500)

const modalMenu = document.querySelector("#product")

// ------------------------ FUNCTIONS ------------------------

async function openProductModal(id) {
	const url = "/fetch/items.json"
	const response = await fetch(url)
	const json = await response.json()
	modalMenu.showModal()
	modalMenu.querySelector(".product-image").src = json[id - 1].url
	modalMenu.querySelector("h2").innerHTML = json[id - 1].title
	modalMenu.querySelector("h3").innerHTML = "<span>Pris:</span> " + json[id - 1].pris + " kr."
	modalMenu.querySelector("p").innerHTML = json[id - 1].beskrivelse
}

function closeProductModal() {
	modalMenu.close()
}

function changePage(page) {
	document.location = page
}