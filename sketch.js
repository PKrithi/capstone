
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img;
var alienImg;
var astronaut,happyAstronaut,displayAstro;


function preload(){
  bg_img = loadImage('spaceBackground.webp');
  alien = loadImage('alien.png');
  
  astronaut = loadAnimation('astronaut.png');
  happyAstronaut = loadAnimation('happyAstro.png');
}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  alien = createSprite(400,300,20,20)

  astronaut = createSprite(200,300,20,20);
  //astronaut.scale = 0.2;

  displayStar.addAnimation('empty',emtpystar);
  displayStar.addAnimation('one',oneStar);
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height)

  Engine.update(engine);
  
}

