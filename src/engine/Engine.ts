import Display from './Display';
import EntityManager from './EntityManager';
import Input from './Input';
import Physics from './Physics';
import CannonDebugger from 'cannon-es-debugger';

export default class Engine {

    display: Display
    input: Input
    physics: Physics
    physicsDebugger: any
    entityManager: EntityManager

    constructor(_canvasParent: HTMLDivElement, _joystick: HTMLElement) {

        this.display = new Display(_canvasParent);
        this.input = new Input(_joystick);
        this.physics = new Physics();
        this.entityManager = new EntityManager();

        this.physicsDebugger = CannonDebugger(this.display.scene, this.physics.world,{})

        this.update = this.update.bind(this);
        this.update();
    }

    update() {

        this.entityManager.update();
        this.physics.update();
        this.physicsDebugger.update();
        requestAnimationFrame(this.update);
        this.display.render();
    }
}