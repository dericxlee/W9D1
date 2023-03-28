import Asteroid from "./asteroid.js";
window.Asteroid = Asteroid;

import MovingObject from "./moving_object.js";
window.MovingObject = MovingObject;

import GameView from "./game_view.js"
window.GameView = GameView;

import Game from "./game.js"
window.Game = Game;


console.log('Webpack is working')

const canvasEl = document.getElementsByTagName("canvas")[0];
canvasEl.height = Game.DIM_Y;
canvasEl.width = Game.DIM_X;

const canvas = document.getElementById('game-canvas')
const ctx = canvas.getContext('2d')

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "red"
}); 
mo.draw(ctx);
console.log(mo,"mo")

const ast = new Asteroid({ pos: [30, 30] });
ast.draw(ctx);
console.log(ast, "ast")
console.log(ast.radius)
console.log(ast.color)
console.log(ast.vel)
console.log(ast.pos)

const gv = new GameView(ctx);
gv.start();

console.log(this.asteroids.pos)