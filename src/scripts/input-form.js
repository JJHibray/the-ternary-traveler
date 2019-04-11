// This is the module to create the input form for places
import buildElement from "./DomManager"

// buildElement(elementType, elementId, elementTextContent, elementValue) {
//     let htmlElement = document.createElement(elementType);
//     if (elementId) {
//       htmlElement.setAttribute("id", elementId);
//     }

//     if (elementValue) {
//       htmlElement.setAttribute("value", elementValue);
//     }
export default {

placeInputForm() {

    const displayContainer = document.querySelector("#display-container")

    let  inputFormContainer = document.createElement("article")
    inputFormContainer.id = "inputForm";

    inputFormContainer.appendChild(buildElement.buildElement("label", undefined, "Interest Name"))
    inputFormContainer.appendChild(buildElement.buildElement("input", "input-interest-name--"))

    inputFormContainer.appendChild(buildElement.buildElement("label", undefined, "Interest Description"))
    inputFormContainer.appendChild(buildElement.buildElement("input", "input-interest-description--"))

    inputFormContainer.appendChild(buildElement.buildElement("label", undefined, "Interest Cost"))
    inputFormContainer.appendChild(buildElement.buildElement("input", "input-interest-cost--"))

    inputFormContainer.appendChild(buildElement.buildElement("label", undefined, "Interest Review"))
    inputFormContainer.appendChild(buildElement.buildElement("input", "input-interest-review--"))

    inputFormContainer.appendChild(buildElement.buildElement("label", undefined, "Place Name"))
    inputFormContainer.appendChild(buildElement.buildElement("input", "input-place-name--"))

    displayContainer.appendChild(inputFormContainer)


}
}