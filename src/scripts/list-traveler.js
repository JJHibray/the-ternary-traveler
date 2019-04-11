import api from "./api"
import dom from "./DomManager"
import html from "./traveler"
// the process of putting my objects into an array of objects, then importing the html to the array and appending it to the dom.

export default {
    listAllInterests() {
        api.getAllInterests().then(interestsArray => {
            console.log(interestsArray)
            let interestsFragment = document.createDocumentFragment();

            interestsArray.forEach(interests => {
                let interestHTML = html.buildPlaceHTML(interests);
                interestsFragment.appendChild(interestHTML)
            })

        const displayContainer = document.querySelector("#display-container")
        const interestsSection = document.createElement("section")
        dom.clearElement(interestsSection)
        displayContainer.appendChild(interestsFragment)
        interestsFragment.appendChild(interestsSection)
        })


    }

}