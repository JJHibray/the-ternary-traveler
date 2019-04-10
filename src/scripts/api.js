const apiBaseURL = "http://localhost:8088"

export default {

getAllInterests() {
    return fetch(`${apiBaseURL}/interests`)
    .then(response => response.json())
}

}