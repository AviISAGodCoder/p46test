const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bgImg;
var player, rileyImg, riley_s;
var arrow, targetImg, levels;
var score = 0;


function preload()
{
  
  rileyImg = loadImage("assets/riley.png")
  riley_s = loadImage("assets/riley_s.png")
  arrowImg = loadImage("assets/arrow.png")
  targetImg = loadImage("assets/target.png")

  bgImg = loadImage("assets/bg.jpg")

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.78
  

player = createSprite(displayWidth-1830, displayHeight-300, 50, 50);
 player.addImage(rileyImg)
   player.scale = 0.5


   target = createSprite(displayWidth/2+950,displayHeight/2-20,20,20)
   target.addImage(targetImg)
   target.scale = 0.65
   target.debug = true;
   target.setCollider("rectangle",0,0,200,400)


}

function draw() {
  rectMode(CENTER);
  background(0); 

if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

if(keyWentDown("space")){
  player.addImage(riley_s)
 
}



else if(keyWentUp("space")){
  arrow = createSprite(player.x+100, player.y, 50,50);
  arrow.velocityX=10;
  arrow.addImage(arrowImg);
  arrow.scale=0.5;          
  player.addImage(rileyImg)
}

if(arrow.isTouching(target))
{
  arrow.destroy();
  score = score+2;

}


  
  


drawSprites();
fill("red");
  textSize(30);
  text("Score " + score, 1790, 50);

}

function gameOver() {
  swal(
    {
      title: `Game Over!!!`,
      text: "Thanks for playing!!",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}




