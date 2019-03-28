// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
        $(".user-container").empty()
        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        const hbText = template(users)
        $(".user-container").append(hbText)
    }

    _renderFriends(users) {
        $(".friends-container").empty()
        const source = $("#user-friends-template").html()
        const template = Handlebars.compile(source)
        const hbText = template(users)
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
        this._renderUsers(data.users)
        this._renderFriends(data.users)
        this._renderQuote(data.quoteInfo)
        this._renderPokemon(data.pokemonInfo)
        this._renderMeat(data.meatText)
    }
}

