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
        this.data = {
            users: {},
            quoteInfo: {
                quote: "A well-loved child has many names.",
                author: "Anonymous"
            },
            pokemonInfo: {},
            meatText: {}
        }
    }

    loadData(){
        $.ajax({
            type: "GET",
            url: "https://randomuser.me/api/?results=7",
            dataType: "json",
            success: (response) => {
                this.data.users.main = simplifyUser(response.results.shift(), ["name", "location", "picture"])
                this.data.users.friends = response.results.map(r => r.name)
            },
            error: function(xhr, text, error) {
                console.log(text)
            }
        });

        // $.ajax({
        //     type: "GET",
        //     url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        //     dataType: "json",
        //     success: (response) => {
        //         this.quoteInfo.quote = response.content
        //         this.quoteInfo.author = response.title
        //     }
        //     error: function(xhr, text, error) {
        //         console.log(text)
        //     }
        // });

        let randomPoke = () => Math.ceil(Math.random() * 807)

        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${randomPoke()}/`,
            dataType: "json",
            success: (response) => {
                this.data.pokemonInfo.name = response.name
                this.data.pokemonInfo.image = response.sprites.front_default
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
}
