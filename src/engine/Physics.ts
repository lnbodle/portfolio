import * as CANNON from 'cannon-es'

export default class Physics {

    world: CANNON.World
    constructor() {
        this.world = new CANNON.World({ 
            gravity: new CANNON.Vec3(0, -9.82, 0) 
        });

        //TODO : Don't do this 
        const groundBody = new CANNON.Body({
            type: CANNON.Body.STATIC,
            shape: new CANNON.Plane()
        })
        groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
        this.world.addBody(groundBody);
    }

    update() {
        this.world.fixedStep();
    }
}