import * as THREE from 'three';
import Game from "../Game"
import Entity from '../Entity';

export default class Player extends Entity  {

    geometry: THREE.BoxGeometry
    material: THREE.MeshBasicMaterial
    mesh: THREE.Mesh

    constructor(_game: Game) {

        super(_game);

        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        this.mesh = new THREE.Mesh(this.geometry,this.material);
        this.game.scene.add(this.mesh);
    }

    update() {

        this.game.camera.lookAt(this.mesh.position)

        if (this.game.joystick) {
            let angle = Number(this.game.joystick.dataset.radian);
            let force = Number(this.game.joystick.dataset.force);
            this.mesh.position.x += Math.cos(angle) * force / 100;
            this.mesh.position.y += Math.sin(angle) * force / 100;
        }  
    }
}