const vurderFormDOM = document.querySelector("#vurder-form")
const start = {
	"Volkswagen": 30000,
	"Toyota": 90000,
	"Skoda": 20000
}

const model = {
	"A": 0.75,
	"B": 1,
	"C": 0.9
}

const skader = {
	"none": 10,
	"model1": 60,
	"model2": 50,
	"model3": 25
}

vurderFormDOM.addEventListener("submit", (event) => {
	event.preventDefault()

	if (vurderFormDOM.elements.inputModel.value != "All") {
		if (vurderFormDOM.elements.inputproducer.value != "All") {
			alert(`Din bil er vurderet til ${start[vurderFormDOM.elements.inputproducer.value] * model[vurderFormDOM.elements.inputModel.value] - ((start[vurderFormDOM.elements.inputproducer.value] * model[vurderFormDOM.elements.inputModel.value] / 100) * skader[vurderFormDOM.elements.inputdamage.value] * 1.25)} kr.`)
		}
	}
})
