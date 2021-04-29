
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,box2,box3;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(225)
 
	box1=createSprite(width/2,650,200,20);
	box1.shapeColor=("red");
	
	box2=createSprite(width/2.7,610,20,100);
	box2.shapeColor=("red");
	
	box3=createSprite(width/1.6,610,20,100);
	box3.shapeColor=("red");

	var options={
		isStatic:false,
		restitution:03,
		friction:0.5,
		density:1.2
	}
	ball=createSprite(80,650,20,20,options);
	ball.shapeColor=("blue");

	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
ball. Body. applyForce(ballObject.body,ballObject.body.position,{x:85,y:-85});
	}
}



