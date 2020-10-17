
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,ground,dustbin1,dustbin2,dustbin3;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(80,620)
    ground = new Ground(400,700,800,20);
	dustbin1 = new DustbinP1();
	dustbin2 = new DustbinP2(600,650,20,150);
	dustbin3 = new DustbinP2(790,650,20,450);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 paperObject.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();

  keyPressed();

  drawSprites();

}

function keyPressed(){

	if(keyCode===UP_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:43.5,y:-43.5});
	}
}



