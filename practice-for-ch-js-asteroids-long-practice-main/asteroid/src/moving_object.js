import Game from "./game.js";


class MovingObject{
    constructor(options){
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();

        ctx.arc(
            this.pos[0],
            this.pos[1],
            this.radius,
            0,
            2 * Math.PI,
            false
        );

        ctx.fill();
    }

    move() {
        this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]]
        this.pos = this.game.wrap(this.pos);
        return this.pos
    }

    isCollidedWith(otherObject){
        let x1 = this.pos[0];
        let y1 = this.pos[1];
        let x2 = otherObject.pos[0];
        let y2 = otherObject.pos[1];
        let rad = this.radius + otherObject.radius

        let dist = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

        return (rad >= dist)
    }

    collideWith(otherObject){
        this.game.remove(otherObject);
        this.game.remove(this);
    }

}

export default MovingObject;

