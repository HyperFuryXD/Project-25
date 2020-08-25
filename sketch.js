
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,ground,dustbin1;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(720,620)
    ground = new Ground(400,600,800,20);
    dustbin1 = new Dustbin1();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 paperObject.display();
ground.display();
dustbin1.display();

  keyPressed();

  drawSprites();

}

function keyPressed(){

	if(keyCode===UP_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



