// This is the module to create the input form for places
import buildElement from "./DomManager"

export default {

placeInputForm() {

    const displayContainer = document.querySelector("#display-container")
    displayContainer.appendChild(inputFormContainer)

    let  inputFormContainer = document.createElement("article")
    inputFormContainer.id = "inputForm";

    inputFormContainer.appendChild(buildElement.buildElement("label", undefined, "Interest Name"))
    inputFormContainer.appendChild(buildElement.buildElement("input", "input-interest-name--", undefined, name))

    inputFormContainer.appendChild(buildElement.buildElement("label", undefined, "Interest Description"))
    inputFormContainer.appendChild(buildElement.buildElement("input", "input-interest-description--", undefined, description))

    inputFormContainer.appendChild(buildElement.buildElement("label", undefined, "Interest Cost"))
    inputFormContainer.appendChild(buildElement.buildElement("input", "input-interest-cost--", undefined, cost))

    inputFormContainer.appendChild(buildElement.buildElement("label", undefined, "Interest Review"))
    inputFormContainer.appendChild(buildElement.buildElement("input", "input-interest-review--", undefined, review))

    inputFormContainer.appendChild(buildElement.buildElement("label", undefined, "Place Name"))
    inputFormContainer.appendChild(buildElement.buildElement("input", "input-place-name--", undefined, placeName))


    return inputFormContainer

}
}