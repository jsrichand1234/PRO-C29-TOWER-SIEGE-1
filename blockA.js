class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':0.5,
        'density':2.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
  // this.image = loadImage("1299816282.png");
 
    World.add(world, this.body);
  }
  
  display(){
      
    
    if(this.body.speed < 3){
      var pos =this.body.position;
      push()
     translate(pos.x ,pos.y)
     rotate(this.body.angle)
    rectMode (CENTER)
    fill("LIME")
    rect(0,0 ,this.width , this.height)
pop()
    }}}