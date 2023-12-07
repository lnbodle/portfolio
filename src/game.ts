import Engine from "./engine/Engine.ts";
import Player from "./engine/entities/Player.ts";
import Test from "./engine/entities/Test.ts";

export function setupGame(element: HTMLDivElement, joystick: HTMLElement) {
    
    let engine = new Engine(element, joystick);

    engine.entityManager.addEntity(new Player(engine));

    let test = new Test(engine);
    engine.entityManager.addEntity(test);
}
  