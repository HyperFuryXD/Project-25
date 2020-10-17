class DustbinP1{
  constructor(){

this.body= Bodies.rectangle(700,680,300,20,{isStatic:true});
  this.height = 20;
  this.width =300;
  this.image = loadImage("dustbingreen(1).png");
  World.add(world,this.body);
  }
  display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
  }
}
