import Display from './Display';
import EntityManager from './EntityManager';
import Input from './Input';
import Physics from './Physics';

export default class Engine {

    display: Display
    input: Input
    physics: Physics
    entityManager: EntityManager
   
    constructor(_canvasParent: HTMLDivElement, _joystick: HTMLElement) {

        this.display = new Display(_canvasParent);
        this.input = new Input(_joystick);
        this.physics = new Physics();
        this.entityManager = new EntityManager();

        this.update = this.update.bind(this);
        this.update();
    }

    update() {
        
        this.entityManager.update();
        requestAnimationFrame(this.update);
        this.display.render();
    }
}