const searchSectionDOM = document.querySelector("#search")
const searchOutputOneDOM = document.querySelector("#search-output-one")
const searchOutputTwoDOM = document.querySelector("#search-output-two")
const filterSectionDOM = document.querySelector("#find")
const filterFormDOM = document.querySelector("#filter-form")
const filterOutputDOM = document.querySelector("#filter-output")
const params = new URLSearchParams(location.search)
const searchInput = params.get("search")

async function search() {
	const itemsFetch = await fetch("/fetch/items.json")
	const items = await itemsFetch.json()

	searchOutputOneDOM.querySelectorAll("div").forEach((elm) => {
		elm.remove()
	})

	searchOutputTwoDOM.querySelectorAll("div").forEach((elm) => {
		elm.remove()
	})

	items.forEach((obj) => {
		let searchObj = true

		if (!obj["title"].toLowerCase().includes(searchInput.toLowerCase())) {
			console.log(obj["title"].toLowerCase())
			if (!obj["beskrivelse"].toLowerCase().includes(searchInput.toLowerCase())) {
				searchObj = false
			}
		}

		if (searchObj) {
			if (obj["type"] == 1) {
				searchOutputOneDOM.innerHTML += `<div class="item" onclick="openProductModal(${obj["id"]})"><figure><img src="${obj["url"]}" alt="et produkt"></figure><section><h3>${obj["title"]}</h3><p>${obj["beskrivelse"]}</p></section><h3>${obj["pris"]} kr.</h3></div>`
			} else {
				searchOutputTwoDOM.innerHTML += `<div class="item" onclick="openProductModal(${obj["id"]})"><figure><img src="${obj["url"]}" alt="en bil"></figure><section><h3>${obj["title"]}</h3><p>${obj["beskrivelse"]}</p></section><h3>${obj["pris"]} kr.</h3></div>`
			}
		}

		if (!searchOutputOneDOM.innerHTML.includes("<")) {
			searchOutputOneDOM.innerHTML += "<p>Der kunne ikke findes nogle biludstur.</p>"
		}

		if (!searchOutputTwoDOM.innerHTML.includes("<")) {
			searchOutputTwoDOM.innerHTML += "<p>Der kunne ikke findes nogle biler.</p>"
		}
	})
}

async function filterSearch() {
	const itemsFetch = await fetch("/fetch/items.json")
	const items = await itemsFetch.json()

	filterOutputDOM.querySelectorAll("div").forEach((elm) => {
		elm.remove()
	})

	items.forEach((obj) => {
		const elemen = filterFormDOM.elements
		let filterObj = true

		if (obj["type"] != elemen.inputtype.value && elemen.inputtype.value != 0) {
			filterObj = false
		}

		if (obj["pris"] >= elemen.inputprice.value) {
			filterObj = false
		}

		if (!obj["farve"].includes(elemen.inputcolor.value)) {
			filterObj = false
		}

		if (obj["vægt"] >= elemen.inputweight.value) {
			filterObj = false
		}

		if (filterObj) {
			filterOutputDOM.innerHTML += `<div class="item" onclick="openProductModal(${obj["id"]})"><figure><img src="${obj["url"]}" alt="et produkt"></figure><h3>${obj["title"]}</h3><p>${obj["pris"]} kr.</p></div>`
		}
	})

}

if (searchInput) {
	filterSectionDOM.style.display = "none"

	search()
} else {
	searchSectionDOM.style.display = "none"

	filterFormDOM.addEventListener("change", () => {
		filterSearch()
	})

	filterSearch()
}
