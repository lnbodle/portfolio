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
        this.material = new THREE.MeshBasicMaterial({ color: 0x0080ff, side: THREE.DoubleSide });
        this.mesh = new THREE.Mesh(this.geometry,this.material);
        this.game.scene.add(this.mesh);

        this.mesh.position.y -= 1
        this.mesh.rotateX(Math.PI / 2)
    }

    update() {
       // console.log(this)
    }
}