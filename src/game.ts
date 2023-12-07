import Game from "./engine/Game.ts"

export function setupGame(element: HTMLDivElement, joystick: HTMLElement) {
    
    new Game(element, joystick);
    console.log("just for test")
}
  