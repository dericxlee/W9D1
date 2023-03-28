import Asteroid from "./asteroid.js";

class Game {
    static DIM_X = 1000;
    static DIM_Y = 500;
    static NUM_ASTEROIDS = 10

    constructor (){
        this.asteroids = [];
        while(this.asteroids.length < Game.NUM_ASTEROIDS) {this.asteroids.push(this.addAsteroids())};
    }

    addAsteroids(){
        return new Asteroid({pos: this.randomPosition(), game: this})
    }

    randomPosition(){
        return [Math.floor(Math.random() * Game.DIM_X), Math.floor(Math.random() * Game.DIM_Y)]
    }

    draw(ctx) {
        ctx.clearRect(0,0,1000,500)
        this.asteroids.forEach(asteroid => asteroid.draw(ctx))
    }

    moveObjects(){
        this.asteroids.forEach(asteroid => asteroid.move())
    }

    wrap(pos){
        let x = pos[0] % Game.DIM_X;
        let y = pos[1] % Game.DIM_Y;
        if(x < 0) x += Game.DIM_X;
        if(y < 0) y += Game.DIM_Y;
        return [x, y];
        // let x = pos[0];
        // let y = pos[1];
        // if (x === 0 || x === 1000 || y === 0 || y === 500){
        //     return [500, 250];
        // }
    }

    checkCollisions(){
        for(let i = 0; i < this.asteroids.length - 1; i ++){
            for(let j = i+1; j < this.asteroids.length; j++ ){
                if(this.asteroids[i].isCollidedWith(this.asteroids[j])){
                    return alert("COLLISION")
                }
            }
        }
    }

    step(){
        this.moveObjects()
        this.checkCollisions()
    }

    remove(asteroid){
        return this.asteroids = this.asteroids.filter(ele => ele !== asteroid);
    }
}


export default Game;