import Component from "./Component"
import Engine from "./Engine"

export default class Entity {

    engine: Engine
    components: Array<Component>

    constructor(_engine: Engine) {

        this.engine = _engine
        this.components = new Array<Component>
    }

    addComponent(_component: Component) {
        
        this.components.push(_component);
    }

    update() {

        for (let i = 0 ; i < this.components.length ; i++) {
            this.components[i].update();
        }
    }
}