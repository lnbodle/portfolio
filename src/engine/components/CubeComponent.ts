import * as THREE from 'three';
import Component from "../Component"
import Entity from "../Entity";
import BodyComponent from './BodyComponent';


export default class CubeComponent extends Component {

    geometry: THREE.BoxGeometry;
    material: THREE.MeshBasicMaterial;
    mesh: THREE.Mesh;

    bodyComponent: BodyComponent

    constructor(_parent: Entity, _bodyComponent: BodyComponent) {
        super(_parent)
        this.bodyComponent = _bodyComponent;
        
        this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( { color: 0x00ff0 } );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.parent.engine.display.scene.add(this.mesh);
    }

    update(): void {
        if (this.bodyComponent) {

            this.mesh.position.x = this.bodyComponent.body.position.x;
            this.mesh.position.y = this.bodyComponent.body.position.y;
            this.mesh.position.z = this.bodyComponent.body.position.z;

            this.mesh.quaternion.x = this.bodyComponent.body.quaternion.x;
            this.mesh.quaternion.y = this.bodyComponent.body.quaternion.y;
            this.mesh.quaternion.z = this.bodyComponent.body.quaternion.z;
            this.mesh.quaternion.w = this.bodyComponent.body.quaternion.w;
        }
    }
}