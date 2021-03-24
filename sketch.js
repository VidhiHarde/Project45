var player,playerImg;
var road,roadImg;
var edges;
var garbageGrp,g1,g2,g3,g4,g5,g6,g7,g8,g9,g10;

function preload(){
	
playerImg=loadAnimation("Images/Player.png","Images/PlayerWalking.png");	
roadImg=loadImage("Images/Road2.jpg");
g1=loadImage("Images/G1.png");
g2=loadImage("Images/G2.png");
g3=loadImage("Images/G3.png");
g4=loadImage("Images/G4.png");
g5=loadImage("Images/G5.png");
g6=loadImage("Images/G6.png");
g7=loadImage("Images/G7.png");
g8=loadImage("Images/G8.png");
g9=loadImage("Images/G9.png");
g10=loadImage("Images/G10.png");
}

function setup() {
createCanvas(500, 600);
road=createSprite(245,260,400,800);
road.addImage("roadI",roadImg);
road.scale=0.9;
road.velocityY=2;

player=createSprite(100,500,10,40);
player.addAnimation("P1",playerImg);

//edges=createEdgeSprites();
//player.bounceOff(edges[0]);
//player.bounceOff(edges[1]);
garbageGrp=new Group();
}


function draw() {

if(keyDown(LEFT_ARROW)){
player.x=player.x-3;
}
if(keyDown(RIGHT_ARROW)){
	player.x=player.x+3;
}
if(road.y>350){
road.y=250;
}

  background(0);
  spawnGarbage();
  
  drawSprites();
 
}
function spawnGarbage() {
	if(frameCount % 160 === 0) {
	  var garbage = createSprite(300,165,10,40);
	  garbage.x=Math.round(random(100,400))
	 garbage.velocityY = 2
	  
	  //generate random garbage
	  var rand = Math.round(random(1,6));
	  switch(rand) {
		case 1: garbage.addImage(g1);
				break;
		case 2: garbage.addImage(g2);
				break;
		case 3: garbage.addImage(g3);
				break;
		case 4: garbage.addImage(g4);
				break;
		case 5: garbage.addImage(g5);
				break;
		case 6: garbage.addImage(g6);
				break;
		case 7: garbage.addImage(g7);
			    break;
		case 8: garbage.addImage(g8);
				break;
		case 9: garbage.addImage(g9);
				break;
		case 10: garbage.addImage(g10);
				break;					
		default: break;
	  }
	  
	  //assign scale and lifetime to garbage         
	  garbage.scale = 0.5;
	  garbage.lifetime = 300;
	  //add each garbage to the group
	  garbageGrp.add(garbage);
	}
  }
  


