const searchSectionDOM = document.querySelector("#search")
const filterSectionDOM = document.querySelector("#find")
const filterFormDOM = document.querySelector("#filter-form")
const filterOutputDOM = document.querySelector("#filter-output")
const params = new URLSearchParams(location.search)
const searchInput = params.get("search")

if (searchInput) {
	filterSectionDOM.style.display = "none"
} else {
	searchSectionDOM.style.display = "none"
}
