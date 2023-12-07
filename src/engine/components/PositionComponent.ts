import * as THREE from 'three';
import Component from "../Component"
import Entity from "../Entity";

export default class PositionComponent extends Component {

    position: THREE.Vector3
    quaternion: THREE.Quaternion
    constructor(_parent: Entity, 
                _position: THREE.Vector3 = new THREE.Vector3(0,0,0),
                _quaternion: THREE.Quaternion = new THREE.Quaternion()
    ) {
        super(_parent)
        this.position = _position;
        this.quaternion = _quaternion;
    }
}