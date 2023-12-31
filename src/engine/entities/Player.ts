import Engine from '../Engine';
import Entity from '../Entity';
import BodyComponent from '../components/BodyComponent';
import JoystickMouvementComponent from '../components/JoystickMovementComponent';
import CubeComponent from '../components/CubeComponent';

export default class Player extends Entity  {

    bodyComponent: BodyComponent
    joystickMovementComponent: JoystickMouvementComponent
    cubeComponent: CubeComponent

    constructor(_engine: Engine) {

        super(_engine);
      

        this.bodyComponent = new BodyComponent(this);
        this.addComponent(this.bodyComponent);

        this.cubeComponent = new CubeComponent(this, this.bodyComponent);
        this.addComponent(this.cubeComponent);

        this.joystickMovementComponent = new JoystickMouvementComponent(this, this.bodyComponent);
        this.addComponent(this.joystickMovementComponent);
    }
}