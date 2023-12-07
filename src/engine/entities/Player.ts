import Engine from '../Engine';
import Entity from '../Entity';
import BodyComponent from '../components/BodyComponent';
import PositionComponent from '../components/PositionComponent';
import JoystickMouvementComponent from '../components/JoystickMovementComponent';
import CubeComponent from '../components/CubeComponent';

export default class Player extends Entity  {

    positionComponent: PositionComponent
    bodyComponent: BodyComponent
    joystickMovementComponent: JoystickMouvementComponent
    cubeComponent: CubeComponent

    constructor(_engine: Engine) {

        super(_engine);
        this.positionComponent = new PositionComponent(this);
        this.addComponent(this.positionComponent);

        this.bodyComponent = new BodyComponent(this, this.positionComponent);
        this.addComponent(this.bodyComponent);

        this.cubeComponent = new CubeComponent(this, this.positionComponent);
        this.addComponent(this.cubeComponent);

        this.joystickMovementComponent = new JoystickMouvementComponent(this, this.positionComponent);
        this.addComponent(this.joystickMovementComponent);
    }
}