import * as THREE from 'three';
import Player from "./entities/Player"
import Entity from './Entity';
import Terrain from './entities/Terrain';

import * as CANNON from 'cannon-es'

export default class Game {

    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    element: HTMLDivElement
    joystick: HTMLElement
    entities: Array<Entity>
    world: CANNON.World
    axesHelper:THREE.AxesHelper

    constructor(_element: HTMLDivElement, _joystick: HTMLElement) {

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.element = _element;
        this.element.appendChild(this.renderer.domElement);

        this.joystick = _joystick;

        this.entities = new Array<Entity>;

        this.world = new CANNON.World({gravity: new CANNON.Vec3(0,-9.82,0)});
        let ground = new CANNON.Body({
            type: CANNON.Body.STATIC,
            shape: new CANNON.Plane()
        })
        ground.quaternion.setFromEuler( - Math.PI / 2, 0, 0)
        this.world.addBody(ground); 
           

        this.init();
        this.update = this.update.bind(this)
        this.update()

        this.onWindowResize();

        this.axesHelper = new THREE.AxesHelper( 5 );
        this.scene.add( this.axesHelper );
        
    }

    init() {
        this.camera.position.z = 10;
        this.camera.position.y = 5;
        //this.camera.position.y = -10;
        //this.camera.rotateZ(Math.PI);

       
        this.entities.push(new Player(this));
        //this.entities.push(new PlayerTest(this));
        //this.entities.push(new TestLight(this));
        this.entities.push(new Terrain(this)); 
    }

    update() {

        //this.camera.lookAt(new THREE.Vector3(0,0,0))

        for (let i = 0 ; i < this.entities.length ; i++) {
            this.entities[i].update();
        }

        requestAnimationFrame( this.update );
        this.renderer.render( this.scene, this.camera);
    }

    onWindowResize(){

        let self = this;
        window.addEventListener( 'resize', () => {
            self.camera.aspect = window.innerWidth / window.innerHeight;
            self.camera.updateProjectionMatrix();
            self.renderer.setSize( window.innerWidth, window.innerHeight );
        }, false );
    }
}