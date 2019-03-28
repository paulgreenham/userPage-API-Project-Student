// Create instances of your classes

const apiManager = new APIManager
const renderer = new Renderer


// Create the loadData and renderData functions - these should use the relevant instance

$("#load-button").on("click", function() {
    apiManager.loadData()
    console.log(apiManager.data)
})

$("#display-button").on("click", function() {
    renderer.render(apiManager.data)
})