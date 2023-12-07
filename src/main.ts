import './style.css'
import { setupGame } from './game.ts'

import 'virtual-joystick';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="ui">
    <virtual-joystick id="joystick" data-mode="dynamic"></virtual-joystick>
  </div>
  <div id="game"> </div>
`
setupGame(
  document.querySelector<HTMLDivElement>('#game')!,
  document.querySelector<HTMLDivElement>('#joystick')!
)
