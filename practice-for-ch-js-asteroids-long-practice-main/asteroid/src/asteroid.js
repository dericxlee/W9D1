import * as Util from "./util.js";
import MovingObject from "./moving_object.js";

class Asteroid extends MovingObject{
    static RADIUS = 25;
    static COLOR = 'green';
    constructor(options){
        super(options);
        this.color = Asteroid.COLOR;
        this.radius = Asteroid.RADIUS;
        this.vel = Util.randomVec(5)
    }
}

export default Asteroid;