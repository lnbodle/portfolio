import Game from "./engine/Game.ts"

export function setupGame(element: HTMLDivElement, joystick: HTMLElement) {
    
    let game = new Game(element, joystick);
    console.log("just for test")
}
  