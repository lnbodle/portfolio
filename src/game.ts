import Game from "./engine/Game.ts"

import Engine from "./engine/Engine.ts";
import Player from "./engine/entities/Player.ts";

export function setupGame(element: HTMLDivElement, joystick: HTMLElement) {
    
    let engine = new Engine(element, joystick);

    engine.entityManager.addEntity(new Player(engine));

    console.log("just for test")
}
  