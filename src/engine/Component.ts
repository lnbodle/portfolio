import Entity from "./Entity";

export default class Component {

    parent: Entity
    constructor(_parent: Entity) {
        this.parent = _parent;
    }

    update(){}
}