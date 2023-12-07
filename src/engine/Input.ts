export class VirtualJoystick {

    element: HTMLElement
    constructor(_element: HTMLElement) {
        this.element = _element;
    }

    getRadian() {
        return Number(this.element.dataset.radian);
    }

    getForce() {
        return Number(this.element.dataset.force);
    }
}

export default class Input {

    virtualJoystick: VirtualJoystick

    constructor(_virtualJoystickElement: HTMLElement) {
        this.virtualJoystick = new VirtualJoystick(_virtualJoystickElement);
    }
}