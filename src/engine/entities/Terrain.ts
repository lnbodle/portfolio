import * as THREE from 'three';
import Game from "../Game"
import Entity from '../Entity';

export default class Terrain extends Entity  {


    geometry: THREE.PlaneGeometry
    material: THREE.MeshBasicMaterial
    mesh: THREE.Mesh

    constructor(_game: Game) {

        super(_game);

        console.log(this);

        this.geometry = new THREE.PlaneGeometry(10,10);
        this.material = new THREE.MeshBasicMaterial({ color: 0x0080ff });
        this.mesh = new THREE.Mesh(this.geometry,this.material);
        this.game.scene.add(this.mesh);
    }

    update() {
       // console.log(this)
    }
}