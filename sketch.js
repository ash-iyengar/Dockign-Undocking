const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies
var engine
var world
var border1 , border2, border3, border4
var astronaut



function preload(){
  bg=loadImage("images/iss.png")
  sleep = loadAnimation("images/sleep.png")
  brush = loadAnimation ("images/brush.png")
  gym = loadAnimation("images/gym11.png","images/gym12.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png")
  drink = loadAnimation("images/drink1.png","images/drink2.png")
  move = loadAnimation("images/move.png","images/move1.png")
}

function setup() {
  engine=Engine.create()
  world=engine.world


  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut = createSprite(300,230)
  astronaut.addAnimation ("sleeping", sleep)
  astronaut.scale = 0.1

  
}

function draw() {
  background(bg);  
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=300
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("exercising",gym)
    astronaut.changeAnimation("exercising")
    astronaut.y=300
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y=300
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("drinking",drink)
    astronaut.changeAnimation("drinking")
    astronaut.y=300
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
  //if(keyDown("space")){
    //astronaut.addAnimation("moving",move)
    //astronaut.changeAnimation("moving")
    //astronaut.y=300
    //astronaut.velocityX = 0
    //astronaut.velocityY= 1
    //console.log("M")
  //}

  drawSprites();
}