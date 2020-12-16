var player,playerimg;                                 var ground,count,rand,ig,bananaGroup;
var bananaimg,obstacleimg,backimg,rockGroup;

function preload(){
backimg=loadImage("jungle.jpg");
  
playerimg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
 bananaimg=loadImage("banana.png");
 obstacleimg=loadImage("stone.png");
}


function setup() {
  createCanvas(400, 400);
  
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",playerimg);
  player.scale = 0.1;


   count=0;
   rand=random(1,400);

  ground = createSprite(200,380,800,10);
  ground.velocityX=-3;
  ground.x = ground.width /2; 
  ground.addImage(backimg); 
  
  rockGroup=new Group();
  bananaGroup=new Group();

  ig= createSprite(200,385,400,5);
  ig.visible = false;
   
}

function draw() {
background(255);

  
 if(ground.x<0){
  ground.x=ground.width/2;
}

 if(keyDown("space")&& player.y >= 320){
    player.velocityY = -15;
  }
  
  if(rockGroup.isTouching(player)){
  player.scale=0.1;
  }

player.velocityY = player.velocityY +1;
player.collide(ig);
 
 SpawnRock(); 
  SpawnBanana();
  
  switch(count){
    case 10:player.scale=0.12;
    break;
     case 20:player.scale=0.14;
    break;
     case 30:player.scale=0.16;
    break;
    case 40:player.scale=0.18;
    break;
     case 50:player.scale=0.20;
    break;
     case 60:player.scale=0.22;
    break;
     case 70:player.scale=0.24;
    break;
     case 80:player.scale=0.26;
    break;
     case 90:player.scale=0.28;
    break;
     case 100:player.scale=0.30;
    break;
    default:break;
  }
  
drawSprites(); 
  count=Math.round(World.frameCount/4);
textFont(BOLD);
textSize(30);
text("Survival Time:"+count,100,150);
}

function SpawnBanana(){
if(frameCount%60===0){
  var banana=createSprite(400,240,40,10);
  banana.velocityX=-3;
  banana.addImage(bananaimg);
  banana.y=random(240,255);
  banana.scale=0.1;
  banana.depth=player.depth;
  player.depth=player.depth+1;
  banana.lifetime=134;
  bananaGroup.add(banana);
}
} 

function SpawnRock(){
if(frameCount%90===0){
var rock=createSprite(400,355,10,10);
rock.velocityX=-3;
rock.addImage( obstacleimg);
rock.scale=0.2;
rockGroup.add(rock);
}
}




