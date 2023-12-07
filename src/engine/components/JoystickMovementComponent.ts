import * as THREE from 'three';
import Component from "../Component"
import Entity from "../Entity";
import { VirtualJoystick } from '../Input';
import PositionComponent from './PositionComponent';

export default class JoystickMouvementComponent extends Component {


    positionComponent: PositionComponent

    constructor(_parent: Entity,
        _positionComponent: PositionComponent,
    ) {
        super(_parent)

        this.positionComponent = _positionComponent
    }

    update(): void {
        
        let joystick = this.parent.engine.input.virtualJoystick;

        let radian = joystick.getRadian();
        let force = joystick.getForce();
        this.positionComponent.position.x += Math.cos(radian) * force / 100;
        this.positionComponent.position.z -= Math.sin(radian) * force / 100;
    }
}