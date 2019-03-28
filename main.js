// Create instances of your classes

const apiManager = new APIManager
const renderer = new Renderer


// Create the loadData and renderData functions - these should use the relevant instance

$("#load-button").on("click", function() {
    apiManager.loadData()
})

$("#display-button").on("click", function() {
    renderer.render(apiManager.data)
})

$("#save-button").on("click", function() {
    apiManager.saveUserData()
    renderer.renderSavedUsers(savedUsers)
})

$("#retrieve-button").on("click", function() {
    let savedUserID = $(`#saved-users option[value"${$("#input").val()}"]`).data("id")
    console.log(savedUserID)
    apiManager.retrieveData(savedUserID)
    renderer.render(apiManager.data)
})

const savedUsers = JSON.parse(localStorage.users || "[]")
renderer.renderSavedUsers(savedUsers)