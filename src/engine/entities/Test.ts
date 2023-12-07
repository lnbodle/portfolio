import Engine from '../Engine';
import Entity from '../Entity';
import BodyComponent from '../components/BodyComponent';
import CubeComponent from '../components/CubeComponent';

export default class Test extends Entity  {

    bodyComponent: BodyComponent
    cubeComponent: CubeComponent

    constructor(_engine: Engine) {

        super(_engine);


        this.bodyComponent = new BodyComponent(this);
        this.bodyComponent.body.position.x = 1
        this.addComponent(this.bodyComponent);

        this.cubeComponent = new CubeComponent(this, this.bodyComponent);
        this.addComponent(this.cubeComponent);
    }
}