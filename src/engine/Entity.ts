import Game from "./Game"

export default class Entity {

    game: Game

    constructor(_game: Game) {
        console.log(this)
        this.game = _game
    }

    update() {

    }
}