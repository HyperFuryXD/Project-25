class Dustbin1{
constructor(){
  var options ={
      isStatic:true
  }
  this.body = Bodies.rectangle(80,620,20,70);
  this.width = 20;
  this.height = 70;
  World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
  }
}