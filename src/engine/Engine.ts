import Display from './Display';
import EntityManager from './EntityManager';
import Input from './Input';
import Physics from './Physics';
import CannonDebugger from 'cannon-es-debugger';
import Stats from 'stats.js';

export default class Engine {

    display: Display
    input: Input
    physics: Physics
    physicsDebugger: any
    entityManager: EntityManager
    stats: Stats

    constructor(_canvasParent: HTMLDivElement, _joystick: HTMLElement) {

        this.display = new Display(_canvasParent);
        this.input = new Input(_joystick);
        this.physics = new Physics();
        this.entityManager = new EntityManager();

        this.physicsDebugger = CannonDebugger(this.display.scene, this.physics.world, {})

        //TODO : Maybe create a class, may not be neccesary
        this.stats = new Stats();
        this.initStats();

        this.update = this.update.bind(this);
        this.update();

       
    }

    initStats() {
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(this.stats.dom);
    }

    update() {

        this.stats.begin();

        this.entityManager.update();
        this.physics.update();
        this.physicsDebugger.update();
        this.display.render();

        this.stats.end();

        requestAnimationFrame(this.update);
    }
}