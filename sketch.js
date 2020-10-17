
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cow, ground;
var cow1, cow2, cow3;
var horse,horse1,horse2;
var hen1, hen2, hen;
function preload()
{
	bg = loadImage("bg.jpg");
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   cow = new Cow(200,400,70,60);
   cow1 = new Cow(100,400,70,60);
   cow2 = new Cow(100,480,70,60);
   ground = new Ground();
   horse = new Horse(600,400,70,60);
   horse1 = new Horse(600,460,70,60);
   horse2 = new Horse(700,400,70,60);
   hen = new Hen(600,300,40,40);
   hen1 = new Hen(500,300,40,40);
   hen2 = new Hen(550,340,40,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  cow.display();
  cow1.display();
  cow2.display();
  horse.display();
  horse2.display();
  horse1.display();
  ground.display();
  hen.display();
  hen1.display();
  hen2.display();
  drawSprites();
 
}



