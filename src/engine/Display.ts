import * as THREE from 'three';


export default class Display {

    canvasParent: HTMLElement
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer

    constructor(_canvasParent: HTMLElement) {

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.canvasParent = _canvasParent;
        this.canvasParent.appendChild(this.renderer.domElement);

        this.onWindowResize();

        this.camera.position.z = 5;
        this.camera.position.y = 5
        this.camera.lookAt(0,0,0);

        //TODO : don't do this
        /*const axesHelper = new THREE.AxesHelper( 5 );
        this.scene.add( axesHelper );*/
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {

        let self = this;
        window.addEventListener('resize', () => {
            self.camera.aspect = window.innerWidth / window.innerHeight;
            self.camera.updateProjectionMatrix();
            self.renderer.setSize(window.innerWidth, window.innerHeight);
        }, false);
    }
}