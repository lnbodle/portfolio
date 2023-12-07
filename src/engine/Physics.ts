import * as CANNON from 'cannon-es'

export default class Physics {

    world: CANNON.World
    constructor() {
        this.world = new CANNON.World({ 
            gravity: new CANNON.Vec3(0, -9.82, 0) 
        });
    }
}