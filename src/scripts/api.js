const apiBaseURL = "http://localhost:8088"

export default {

getAllInterests() {
    return fetch(`${apiBaseURL}/interests?_expand=place`)
    .then(response => response.json())
},



getAllPlaces() {
    return fetch(`${apiBaseURL}/places`)
    .then(response => response.json())
}
}