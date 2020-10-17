class DustbinP2{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,this.width,this.height,{isStatic:true});
        this.height = height;
        this.width = width;    
        World.add(world,this.body);    
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}