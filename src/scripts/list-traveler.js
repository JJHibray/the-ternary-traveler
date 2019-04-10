import api from "./api"
import dom from "./DomManager"
import html from "./traveler"
// the process of putting my objects into an array of objects

export default {
    listAllInterests() {
        api.getAllInterests().then(interestsArray => {
            console.log(interestsArray)
        let interestsFragment = document.createDocumentFragment();

        interestsArray.forEach(interest => {
            let interestHTML = html.buildPlaceHTML(interest);
            interestsFragment.appendChild(interestHTML)
        })

        const interestsSection = document.getElementsByClassName("display-container")
        dom.clearElement(interestsSection)
        interestsSection.appendChild(interestsFragment)
        })
    }
}