const capitalizeEachWord = function(str) {
    let newStr = ""
    for(let i = 1; i < str.length; i++) {
        if(str[i - 1]== " ") {
            newStr += str[i].toUpperCase()
        }
        else {
            newStr += str[i]
        }
    }
    return newStr.charAt(0).toUpperCase() + newStr.slice(1)
}

Handlebars.registerHelper("properNoun", function(options) {    
    return capitalizeEachWord(options.fn(this))
})

class Renderer {
    _renderUsers(userInfo) {
        $(".user-container").empty()
        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        const hbText = template(userInfo)
        $(".user-container").append(hbText)
    }

    _renderFriends(userInfo) {
        $(".friends-container").empty()
        const source = $("#user-friends-template").html()
        const template = Handlebars.compile(source)
        const hbText = template(userInfo)
        $(".friends-container").append(hbText)
    }

    _renderQuote(quoteInfo) {
        $(".quote-container").empty()
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        const hbText = template(quoteInfo)
        $(".quote-container").append(hbText)
    }

    _renderPokemon(pokemonInfo) {
        $(".pokemon-container").empty()
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const hbText = template(pokemonInfo)
        $(".pokemon-container").append(hbText)
    }

    _renderMeat(meatText) {
        $(".meat-container").empty()
        const source = $("#meat-template").html()
        const template = Handlebars.compile(source)
        const hbText = template(meatText)
        $(".meat-container").append(hbText)
    }

    render(data){
        this._renderUsers(data.userDetails)
        this._renderFriends(data.userDetails)
        this._renderQuote(data.quoteInfo)
        this._renderPokemon(data.pokemonInfo)
        this._renderMeat(data.meatText)
    }

    renderSavedUsers(users) {
        $("#menu-container").empty()
        const source = $("#menu-template").html()
        const template = Handlebars.compile(source)
        const hbText = template(users)
        console.log(hbText)
        $("#menu-container").append(hbText)
    }
}

