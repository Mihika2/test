var tower, towerImage;
var door, doorImage, doorsGroup;
var climber, climberImage, climbersGroup;




function preload() {
  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  climberImage = loadImage("climber.png");
  doorsGroup = new Group();
  climbersGroup = new Group();
}



function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImage);
  tower.velocityY = 1;
}


function draw() {

  if (tower.y > 400) {
    tower.y = 300;
  }

  spawnDoors();

  drawSprites();
}

function spawnDoors() {
  if (frameCount % 240 === 0) {
    door = createSprite(200, -50);
    door.addImage("door", doorImage);
   
    
    
    door.lifetime = 800;
    climber.lifetime = 800;
    
    climber = createSprite(200, 10);
    climber.addImage(climberImage);
    
    door.x = Math.round(random(100, 400));
     door.velocityY = 1;
    
    climber.x = door.x;
    climber.velocityY = 1;
    climbersGroup.add(climber);
    doorsGroup.add(door);

  }

}