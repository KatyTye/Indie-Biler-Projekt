const galleryLeftButtonDOM = document.querySelector("#content .gallery .left-button")
const galleryRightButtonDOM = document.querySelector("#content .gallery .right-button")
const galleryContentDOM = document.querySelectorAll("#content .gallery .img-holder figure")
let cooldown = false
let selected = 2

galleryLeftButtonDOM.addEventListener("click", () => {
	if (cooldown == false) {
		cooldown = true
		selected -= 1
		if (selected === -1) {
			selected = 4
		}

		galleryContentDOM.forEach((elm) => {
			elm.style.transform = `translateX(${215 - (107.5 * selected)}%)`
		})
		setTimeout(() => {
			cooldown = false
		}, 500)
	}
})

galleryRightButtonDOM.addEventListener("click", () => {
	if (cooldown == false) {
		cooldown = true
		selected += 1
		if (selected === 5) {
			selected = 0
		}

		galleryContentDOM.forEach((elm) => {
			elm.style.transform = `translateX(${(215 - (107.5 * selected)) + 1 * selected}%)`
		})
		setTimeout(() => {
			cooldown = false
		}, 1500)
	}
})
