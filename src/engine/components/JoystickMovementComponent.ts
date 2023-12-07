import Component from "../Component"
import Entity from "../Entity";
import BodyComponent from "./BodyComponent";


export default class JoystickMouvementComponent extends Component {

    bodyComponent: BodyComponent

    constructor(_parent: Entity,
        _positionComponent: BodyComponent,
    ) {
        super(_parent)

        this.bodyComponent = _positionComponent
    }

    update(): void {
        
        let joystick = this.parent.engine.input.virtualJoystick;

        let radian = joystick.getRadian();
        let force = joystick.getForce();
        this.bodyComponent.body.position.x += Math.cos(radian) * force / 100;
        this.bodyComponent.body.position.z -= Math.sin(radian) * force / 100;
    }
}