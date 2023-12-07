import Component from "../Component"
import Entity from "../Entity";
import * as CANNON from 'cannon-es'
import PositionComponent from "./PositionComponent";

export default class BodyComponent extends Component {

    body: CANNON.Body
    positionComponent: PositionComponent

    constructor(_parent: Entity, _positionComponent: PositionComponent) {
        super(_parent)
        this.positionComponent = _positionComponent;
        this.body = new CANNON.Body();
    }

    update(): void {

        if (this.positionComponent) {
            this.body.position = new CANNON.Vec3(
                this.positionComponent.position.x,
                this.positionComponent.position.y,
                this.positionComponent.position.z
            );

            this.body.quaternion = new CANNON.Quaternion(
                this.positionComponent.quaternion.x,
                this.positionComponent.quaternion.y,
                this.positionComponent.quaternion.z,
                this.positionComponent.quaternion.w
            );
        }
    }
}