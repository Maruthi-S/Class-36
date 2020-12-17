var gameState = 0, database;
var playerCount , form;
var game , player;


function setup(){
  createCanvas(400,400);

  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
 
}
