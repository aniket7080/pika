var background1;
var pikachu1,pikachu2,pikachu3,pikachu4;

function preload(){
  background1Image = loadImage("background1.png")
  pikachu1Image = loadAnimation("pikachu1.png","pikachu2.png","pikachu3.png","pikachu4.png")
  
}

function setup(){
  createCanvas(400,400);

  background1 = createSprite(200,200)
  background1.addImage(background1Image)
  background1.x = width/2
  background1.velocityX = -5

  pikachu1 = createSprite(50,330,30,30)
  pikachu1.addAnimation("image",pikachu1Image)
  pikachu1.scale = 0.2
  
  
}
function draw() {

  if(background1.x < 0)
  background1.x = background1.width/2
  
  

  drawSprites();
}
