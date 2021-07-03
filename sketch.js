var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage,clouds,cloudsImg;
var blue_Balloon,green_Balloon,pink_Balloon;
var score = 0; 
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

}

function draw() {
 background(0);

 score = frameCount;

  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    createArrow();

  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }

    if(select_balloon == 2) {
      blueBalloon();
    }

    if(select_balloon == 3) {
      greenBalloon();
    }

    if(select_balloon == 4) {
      pinkBalloon();
    }
  }
  drawSprites();

  textSize(18);
  fill("black"); 
  text("Your Score: "+ score ,250,30);

}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -10;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  red.depth = 5;

}

function blueBalloon() {
  //write code for spwaning blue balloons
  blue_Balloon = createSprite(0,random(50,350));
  blue_Balloon.addImage(blue_balloonImage);
  blue_Balloon.lifetime = 150;
  blue_Balloon.velocityX = 3
  blue_Balloon.scale = 0.1;
  blue_Balloon.depth = 10;
}

function greenBalloon() {
  //write code for spwaning green balloons
  green_Balloon = createSprite(0,random(50,350));
  green_Balloon.addImage(green_balloonImage);
  green_Balloon.lifetime = 150;
  green_Balloon.velocityX = 3
  green_Balloon.scale = 0.1;
  green_Balloon.depth = 15;
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  pink_Balloon = createSprite(0,random(50,350));
  pink_Balloon.addImage(pink_balloonImage);
  pink_Balloon.lifetime = 150;
  pink_Balloon.velocityX = 3
  pink_Balloon.scale = 1;
  pink_Balloon.depth = 20;
}
