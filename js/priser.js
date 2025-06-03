const searchSectionDOM = document.querySelector("#search")
const filterSectionDOM = document.querySelector("#find")
const filterFormDOM = document.querySelector("#filter-form")
const filterOutputDOM = document.querySelector("#filter-output")
const params = new URLSearchParams(location.search)
const searchInput = params.get("search")

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
} else {
	searchSectionDOM.style.display = "none"

	filterFormDOM.addEventListener("change", () => {
		filterSearch()
	})

	filterSearch()
}
