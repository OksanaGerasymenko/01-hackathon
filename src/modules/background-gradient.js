import {Module} from '../core/module'

export class BackgroundGradientModule extends Module {
    constructor() {
        super('gradientColor', 'change the gradient')
    }

    trigger() {
        const randum = function(max) { 
            return Math.round(Math.random() * max);
        }
        
        const hexify = function(x) { 
            return ('0' + parseInt(x).toString(16)).slice(-2);
        }
        
        const randex = function() { 
            return '#' + hexify(randum(255)) + hexify(randum(255)) + hexify(randum(255));
        };
        
        const blender = function() { 
            if (!Math.round(Math.random())) {
              return 'radial-gradient(circle at ' + randum(100) + '% ' + randum(100) + '%, ' + randex() + ', ' + randex() + ')';
            } else {
              return 'linear-gradient(' + randum(360) + 'deg, ' + randex() + ', ' + randex() + ')';
            }
        };
        document.body.style.background = blender()
    }

}