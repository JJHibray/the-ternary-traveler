import buildElement from "./DomManager"


//  this is where I am building the html content of my app

//const buildElement = (elementType, elementId, elementTextContent, elementValue)
// so I remember which spot in the index is what

export default{

buildPlaceHTML(placeObject) {

//outline of how information is shown on the dom
//  <article>
//     <h3>(name of shop, monument, etc in place)</h3>
//     <p>(description)</p>
//     <p>(cost)</p>
//     <p>(review)</p>
//     <p>(placeName)</p>
// </article>

const placeArticle = buildElement.buildElement("article", `interestList--${placeObject.id}`);
placeArticle.appendChild(buildElement.buildElement("h3", undefined, placeObject.name));
placeArticle.appendChild(buildElement.buildElement("p", undefined, placeObject.description));
placeArticle.appendChild(buildElement.buildElement("p", undefined, placeObject.cost));
placeArticle.appendChild(buildElement.buildElement("p", undefined, placeObject.review));
placeArticle.appendChild(buildElement.buildElement("p", undefined, placeObject.place.name));

// let editPlaceButton = (buildElement.buildElement("button", undefined, "Edit Place"))
// placeArticle.appendChild(editPlaceButton);
// editParkButton.addEventListener("click", )

// let deletePlaceButton = (buildElement.buildElement("button", undefined, "Delete Place"))
// placeArticle.appendChild(deletePlaceButton);
// deletePlaceButton.addEventListener("click", )


return placeArticle


}

}
