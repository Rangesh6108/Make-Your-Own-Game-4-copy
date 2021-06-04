var man,target,obs_1,obs_2,bullet,play;

var manImg,targetImg,obs_1Img,obs_2Img,bulletImg,playButton;

var bg,bg_2;

var edges;

var gameState="serve";

function preload(){

  manImg=loadImage("Images/Man.png");
  obs_1Img=loadImage("Images/Wood.png");
  obs_2Img=loadImage("Images/Wood_2.png");
  playButton=loadImage("Images/Play.png");
  bg=loadImage("Images/background.png");
  bg_2=loadImage("Images/Bg.png");
  bulletImg=loadImage("Images/Bullet.png");
  manImg=loadImage("Images/Man_1.png");
  targetImg=loadImage("Images/Target.png");

}

function setup() {
  createCanvas(1500,1000);

  play=createSprite(700,700);
  play.addImage(playButton);
  play.scale=0.5;
  play.debug=false;
  play.setCollider("circle",0,0,200);

  edges=createEdgeSprites();

  obs_1=createSprite(830,500);
  obs_1.addImage(obs_1Img);
  obs_1.scale=0.5;
  obs_1.velocityY=50;

  obs_2=createSprite(1200,500);
  obs_2.addImage(obs_2Img);
  obs_2.scale=0.5;
  obs_2.velocityY=-50;

  bullet=createSprite(500,500);
  bullet.addImage(bulletImg);
  bullet.scale=0.5;

  man=createSprite(150,700);
  man.addImage(manImg);
  man.scale=1.5;

  target=createSprite(1480,580);
  target.addImage(targetImg);
  target.scale=1;

}

function draw() {  

  if(mousePressedOver(play)){

    gameState="play";

  }

  obs_1.bounceOff(edges,2);
  obs_1.bounceOff(edges,3);

  obs_2.bounceOff(edges,2);
  obs_2.bounceOff(edges,3);

  if(gameState==="serve"){

    background(bg_2);
    play.visible=true;
    obs_1.visible=false;
    obs_2.visible=false;
    man.visible=false;

  }

  if(gameState==="play"){

    background(bg);
    play.visible=false;
    obs_1.visible=true;
    obs_2.visible=true;
    man.visible=true;

    if(keyCode===32){
      bullet.velocityX=50;
    }

    else{
      bullet.x=man.x;
      bullet.y=man.y-100;
      }

    if(keyDown("r")){
      bullet.x=man.x;
      bullet.y=man.y-100;
    }

  }

  drawSprites();

}