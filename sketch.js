
  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var score
  var ground,invisibleGround;
  var survivalTime = 0;


function preload(){
  
  
  monkey_running =              loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas = (600,600);
  
  ground = createSprite(200,300,900,10)
  ground.x = ground.width/2;
  console.log(ground.x)
  
  invisibleGround = createSprite(200,310,400,10);
  invisibleGround.visible = false;
  
  monkey = createSprite(25,270,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale= 0.1;
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  survivalTime = 0;
}


function draw() {
  background (185,235,255);
  
  ground.velocityX =-4;
  if (ground.x < 0){
    ground.x = ground.width/2;
   }
  food();
  obstacles();
 
  
  if(keyDown("space")&& monkey.y >= 270) {
        monkey.velocityY = -15;
        
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisibleGround)
  
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50)
  textSize = 20;
  
   drawSprites()
  
}




function food (){
  
  if (frameCount%90 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    foodGroup.add(banana);
  }
  
}
 function obstacles(){
    
  if (frameCount%200 === 0) {
    var obstacle = createSprite(600,120,40,10);
    obstacle.y = 280;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  } 
   
   
   
   
 }




