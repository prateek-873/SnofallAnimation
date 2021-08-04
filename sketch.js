const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Body=Matter.Body;

var snow=[];
var maxsnow=10;
var snowBody,snowImage;
var boyImage,boy;
var engine,world;

function preload(){
   snowImage=loadImage("snow2.jpg");
   boyImage=loadImage("boy.png");
}

function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;
  
  boy=createSprite(1050,550,50,50);
  boy.addImage("boy",boyImage);
  boy.scale=0.2;

  if(frameCount%180===0){
    for(var i=0;i<maxsnow;i++){
       snow.push(snowBody=new Snow(random(0,1000),random(-50,600)));
    }
}

function draw() {
  background(snowImage);  
  Engine.update(engine);

  if(keyDown("RIGHT_ARROW")){
     boy.x=boy.x+2;
  }
  if(keyDown("LEFT_ARROW")){
    boy.x=boy.x-2;
 }
 for(var i=0;i<maxsnow;i++){
   snow[i].display();
   snow[i].repeat();
 }
 }
 if(frameCount%180 === 0) {
    for(var i=0; i<maxsnow; i++) 
    { snow[i].repeat(); }
   }

   drawSprites();
}
