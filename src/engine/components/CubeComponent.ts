import * as THREE from 'three';
import Component from "../Component"
import Entity from "../Entity";
import PositionComponent from "./PositionComponent";

export default class CubeComponent extends Component {

    geometry: THREE.BoxGeometry;
    material: THREE.MeshBasicMaterial;
    mesh: THREE.Mesh;

    positionComponent: PositionComponent

    constructor(_parent: Entity, _positionComponent: PositionComponent) {
        super(_parent)
        this.positionComponent = _positionComponent;
        
        this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.parent.engine.display.scene.add(this.mesh);
    }

    update(): void {
        if (this.positionComponent) {
            this.mesh.position.x = this.positionComponent.position.x;
            this.mesh.position.y = this.positionComponent.position.y;
            this.mesh.position.z = this.positionComponent.position.z;
        }
    }
}