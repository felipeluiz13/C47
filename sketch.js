var backgroundImg;
var player;
var Frente; 
var Costa;
var Direita;
var Esquerda; 

function preload(){
  backgroundImg = loadImage ("casa.png");
  Costa = loadAnimation ("bot.gif");
  Frente = loadAnimation ("front.gif");
  Direita = loadAnimation ("right.gif");
  Esquerda = loadAnimation ("left.gif");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  player = createSprite(200,200,50,50);
  player.addAnimation ("frente",Frente);
  player.scale = 0.5;
   player.addAnimation ("costa",Costa);
   player.addAnimation ("direita",Direita);
   player.addAnimation ("esquerda",Esquerda);
}

function draw(){
  background(51);
  image(backgroundImg,0,0,1920,1080);
  controls();

  console.log("x:"+player.x);
  console.log("y:"+player.y);
  drawSprites(); 
}

function controls () {
  if(keyDown("w")) {
    player.y = player.y -10;
    player.changeAnimation("costa")
    player.scale = 1.5;
  }

  if(keyDown("s")) {
    player.y = player.y +10;
    player.changeAnimation("frente")
    player.scale = 0.5;
  }

  if(keyDown("a")) {
    player.x = player.x -10;
    player.changeAnimation("esquerda")
    player.scale = 1.5;
  }

  if(keyDown("d")) {
    player.x = player.x +10;
    player.changeAnimation("direita")
    player.scale = 1.5;
  }

  
  if (player.y <= 380) {
    camera.y = 380;
  }
  else if(player.y >= 710) {
    camera.y = 710;
  } 
  else {
    camera.y = player.y;
  }
  
  if(player.x <= 750) {
    camera.x = 750
  }
  else if (player.x >= 1180 ) {
    camera.x = 1180
  }
  else {
    camera.x = player.x;
  }
  
}