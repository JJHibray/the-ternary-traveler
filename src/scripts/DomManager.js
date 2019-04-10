// Contructors set up as base to format and built application
export default {
buildElement(elementType, elementId, elementTextContent, elementValue) {
    let htmlElement = document.createElement(elementType);
    if (elementId) {
      htmlElement.setAttribute("id", elementId);
    }

    if (elementValue) {
      htmlElement.setAttribute("value", elementValue);
    }
    htmlElement.textContent = elementTextContent;
    return htmlElement;
  },

  clearElement(domElement) {
    while (domElement.firstChild) {
      domElement.removeChild(domElement.firstChild);
    }
  }

  //defining container to append to

}