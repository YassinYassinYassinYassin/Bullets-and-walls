var bullet, wall;
var speed, weight;
var thickness;
var numerator, denominator, dividor, answer;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  
  numerator = Math.round(0.5*weight*speed*speed)
  denominator = Math.round(thickness*thickness*thickness)
  answer = Math.round(numerator/denominator);

  dividor = createSprite(622, 348, 160, 5)

  bullet = createSprite(50, 200, 100, 10);
  bullet.shapeColor = "white";

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}


function draw() {
  background("black");  

  bullet.velocityX = speed;
  bullet.collide(wall)

  if (bullet.x>1091){
    textSize(30);
    text("Damage:", 418, 354);
    text(numerator, 570, 338);
    text(denominator, 570, 378);
    text("=" + answer, 728, 354)
  }

  console.log(mouseX, mouseY)
  drawSprites();
}