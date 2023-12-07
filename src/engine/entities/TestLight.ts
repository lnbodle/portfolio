import * as THREE from 'three';
import Game from "../Game"
import Entity from '../Entity';

export default class TestLight extends Entity {


    light: THREE.AmbientLight

    constructor(_game: Game) {

        super(_game);

        this.light = new THREE.AmbientLight( 0x404040 );
        //this.light.position.set(50, 50, 50);
        this.game.scene.add(this.light);
    }

    update() {
        //console.log(this.light)
    }
}