const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box ,ground,bar1,bar2,bar3,barImage,rope ;
var score = 0  ;
var gameState = "onSling";
var background1;

function preload () {
bgi = loadImage("123.jpg");
background1=loadImage("maxresdefault.jpg")

}

function setup(){
    createCanvas(1500,700);

  

    engine = Engine.create();
    world = engine.world;

    
    box = new Box(150,400,50,75);
    ground = new Ground2(1536/2,698,1536,40);
    base1 = new Ground2(640,600,290,20);
    base2 = new Ground2(1150,350,200,20);

   
  
    block1 = new Block(520,558,40,60);
    block2 = new Block(560,558,40,60);
    block3 = new Block(600,558,40,60);
    block4 = new Block(640,558,40,60);
    block5 = new Block(680,558,40,60);
    block6 = new Block(720,558,40,60);
    block7 = new Block (760,558,40,60);
    
    block11 = new Block2(560,498,40,60); 
    block12 = new Block2(600,498,40,60); 
    block13 = new Block2(640,498,40,60); 
    block14 = new Block2(680,498,40,60); 
    block15 = new Block2(720,498,40,60); 

    block22 = new Block3(600,438,40,60);
    block23 = new Block3(640,438,40,60);
     block24 =new Block3(680,438,40,60);

    block25 = new Block(640,378,40,60);

    blockl1 = new Block(1070,308,40,60);
    blockl2 = new Block(1110,308,40,60);
    blockl3 = new Block(1150,308,40,60);
    blockl4 = new Block (1190,308,40,60);
    blockl5 = new Block (1230,308,40,60)

    blockl11 = new Block3(1110,248,40,60);
    blockl12 = new Block3(1150,248,40,60);
    blockl13 = new Block3(1190,248,40,60);

    blockl21 = new Block2(1150,188,40,60);
    
    rope = new SlingShot(box.body,{x:150,y:350});    
}  

function draw(){
    background("lightblue");

   
    Engine.update(engine);

    strokeWeight(2);
    stroke(0);
	fill("black")
    textSize(36);
    textFont("Georgia");
    textStyle(BOLD);
    text("🙂 Press space to get one more chance to play!! 🙂 👍",250,100);
   
    box.display();
    ground.display();
    base1.display();
    base2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block11.display();
    block13.display();
    block14.display();
    block15.display();
    block12.display();

    block22.display();
    block23.display();
    block24.display();
    block25.display();
    blockl2.display();
    blockl1.display();
    blockl3.display();
    blockl4.display();
    blockl5.display();

    blockl11.display();
    blockl12.display();
    blockl13.display();

    blockl21.display();

    rope.display();

  

   

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    rope.fly();
    gameState = "launched";
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(box.body,{x:235, y:420})
        rope.attach(box.body);
        gameState = "onSling";
  }
  
  if(keyCode === space){
    box.x=200;
    box.y=200;
  }
}