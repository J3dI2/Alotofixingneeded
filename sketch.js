
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,ground,boy,stone;
var treeImage,boyImage;
var mangoes1,mangoes2,mangoes3,mangoes4,mangoes5,mangoes6,mangoes7,mangoes8,mangoes9,mangoes0

function preload()
{
	treeImage = loadImage("tree.png");
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = createSprite(width/2,height-5,800,15)

	boy = loadImage(boyImage);
	boy = createSprite(100,ground.y-25,15,15)
	
	stone = new Stone();
	mangoes0 = new Mangoes();
	mangoes1 = new Mangoes();
	mangoes0 = new Mangoes();
	mangoes0 = new Mangoes();
	mangoes0 = new Mangoes();
	mangoes0 = new Mangoes();
	mangoes0 = new Mangoes();
	mangoes0 = new Mangoes();
	mangoes0 = new Mangoes();
	mangoes0 = new Mangoes();

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("White");
  
	stone.display();


  drawSprites();
 
}



