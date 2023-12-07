import Entity from "./Entity";

export default class EntityManager {

    entities: Array<Entity>

    constructor() {
        this.entities = new Array<Entity>;
    }

    addEntity(entity: Entity) {
        this.entities.push(entity);
    }

    update() {
        for (let i = 0 ; i < this.entities.length ; i++) {
            this.entities[i].update();
        }
    }
}