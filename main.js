// Create instances of your classes

const apiManager = new APIManager
const renderer = new Renderer

// Create the loadData and renderData functions - these should use the relevant instance

const renderCurrentData = () => renderer.render(apiManager.data)
const renderStoredUsers = () => renderer.renderSavedUsers(apiManager.getSavedUsers())

$("#load-button").on("click", function() {
    apiManager.loadData()
})

$("#display-button").on("click", renderCurrentData)

$("#save-button").on("click", function() {
    apiManager.saveUserData()
    renderStoredUsers()
})

$("#retrieve-button").on("click", function() {
    let savedUserID = $(`#saved-users option[value="${$("input").val()}"]`).data("id")
    apiManager.retrieveData(savedUserID)
    renderCurrentData()
})

renderStoredUsers()