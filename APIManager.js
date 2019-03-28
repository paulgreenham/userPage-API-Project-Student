//This is the class that will manage all your APIs

const simplifyUser = function(user, desiredKeys) {
    let simplifiedUser = {}
    let keys = Object.keys(user)
    for(let desiredKey of desiredKeys) {
        for(let key of keys) {
            if(key == desiredKey) {
                simplifiedUser[key] = user[key]
            }
        }
    }
    return simplifiedUser
}

class APIManager {
    constructor() {
        this.data = {}
        this.currentID = JSON.parse(localStorage.currentID || "1")
    }

    loadData(){
        $.ajax({
            type: "GET",
            url: "https://randomuser.me/api/?results=7",
            dataType: "json",
            success: (response) => {
                let userDetails = {}
                userDetails.main = simplifyUser(response.results.shift(), ["name", "location", "picture"])
                userDetails.friends = response.results.map(r => r.name)
                this.data.userDetails = userDetails
            },
            error: function(xhr, text, error) {
                console.log(text)
            }
        });

        $.ajax({
            type: "GET",
            url: "https://quotes.rest/qod",
            dataType: "json",
            success: (response) => {
                this.data.quoteInfo = {quote: response.contents.quotes[0].quote, author: response.contents.quotes[0].author} 
            },
            error: (xhr, text, error) => {
                console.log(text)
                let quoteInfo = {}
                quoteInfo.quote = "A well-loved child has many names."
                quoteInfo.author = "Anonymous"
                this.data.quoteInfo = quoteInfo
            }
        });

        let randomPoke = () => Math.ceil(Math.random() * 807)

        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${randomPoke()}/`,
            dataType: "json",
            success: (response) => {
                let pokemonInfo = {}
                pokemonInfo.name = response.name
                pokemonInfo.image = response.sprites.front_default
                this.data.pokemonInfo = pokemonInfo
            },
            error: function(xhr, text, error) {
                console.log(text)
            }
        });

        $.ajax({
            type: "GET",
            url: "https://baconipsum.com/api/?type=all-meat&paras=1",
            dataType: "json",
            success: (response) => {
                this.data.meatText = response
            },
            error: function(xhr, text, error) {
                console.log(text)
            }
        });
    }

    saveUserData() {
        let currentUser = {userID: this.currentID, userData: this.data}
        this.currentID++
        let savedUsers = JSON.parse(localStorage.users || "[]")
        savedUsers.push(currentUser)
        localStorage.users = JSON.stringify(savedUsers)
        localStorage.currentID = JSON.stringify(this.currentID)
    }

    retrieveData(userID) {
        this.data = JSON.parse(localStorage.users.find(u => u.userID == userID) || "{}")
    }
}
