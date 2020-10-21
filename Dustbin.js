class Dustbin{
  constructor(x,y,width,height){
    

this.body= Bodies.rectangle(x,y,width,height,{isStatic:true});
  this.height = height;
  this.width =width;
  //this.image = loadImage("dustbingreen(1).png");
  World.add(world,this.body);
  }
  display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
     // image(this.image, this.body.position.x, this.body.position.y, 50, 50);
  }
}
