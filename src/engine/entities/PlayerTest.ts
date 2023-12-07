import * as THREE from 'three';
import Game from "../Game"
import Entity from '../Entity';
import * as CANNON from 'cannon-es'

export default class PlayerTest extends Entity  {

    geometry: THREE.BoxGeometry
    material: THREE.MeshBasicMaterial
    mesh: THREE.Mesh
    body: CANNON.Body

    constructor(_game: Game) {

        super(_game);

        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        this.mesh = new THREE.Mesh(this.geometry,this.material);
        this.game.scene.add(this.mesh);

        this.body = new CANNON.Body({
            mass: 5,
            shape: new CANNON.Box(new CANNON.Vec3(1,1,1))
        })
        this.game.world.addBody(this.body)
    }

    update() {

        //this.game.camera.lookAt(this.mesh.position)

        this.mesh.position.copy(new THREE.Vector3(
            this.body.position.x,
            this.body.position.y,
            this.body.position.z,
        ));

        this.mesh.quaternion.copy(new THREE.Quaternion(
            this.body.quaternion.x,
            this.body.quaternion.y,
            this.body.quaternion.z,
            this.body.quaternion.w,
        ))

        /*if (this.game.joystick) {
            let angle = Number(this.game.joystick.dataset.radian);
            let force = Number(this.game.joystick.dataset.force);
            this.body.position.x += Math.cos(angle) * force / 100;
            this.body.position.y += Math.sin(angle) * force / 100;
        }  */
    }
}