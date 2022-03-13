import {Module} from '../core/module'
import {random} from '../utils'

export class BackgroundModule extends Module {
    #prevColor

    constructor() {
        super('color', 'change the background color');
        this.#prevColor = '#fff'
    }

    trigger() {
        const currentColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
        document.body.style.background = currentColor;
        setTimeout(() => {
            document.body.style.background = this.#prevColor;
            this.#prevColor = currentColor;
        }, 2000);
    }
}
