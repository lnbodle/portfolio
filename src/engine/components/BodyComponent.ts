import Component from "../Component"
import Entity from "../Entity";
import * as CANNON from 'cannon-es'

export default class BodyComponent extends Component {

    body: CANNON.Body

    constructor(_parent: Entity) {

        super(_parent);
        this.body = new CANNON.Body({
            mass: 5,
            shape: new CANNON.Box(new CANNON.Vec3(0.5,0.5,0.5))
        });
        this.parent.engine.physics.world.addBody(this.body);
    }

    update(): void {}
}