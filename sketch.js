var form, game,player
var database
var gameState = 0
var playerCount = 0
var background_img;

function preload()
{
  background_img = loadImage("start_image.png")

}

function setup()
{
  createCanvas(windowWidth,windowHeight)

   database = firebase.database()

   game = new Game()
   
   game.getState()
   game.startGame()

}

function draw()
{
  // background("white")
   

}