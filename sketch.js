var fixedRect, movingRect;//fixedRect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 3;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -3;
  //fixedRect2 = createSprite(800, 600, 70, 50);
 // fixedRect2.shapeColor = "green";
  //fixedRect2.debug = true;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  //movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;
   //if(isTouching(movingRect,fixedRect)){
    //movingRect.shapeColor = "red";
    //fixedRect.shapeColor = "red";
   //}
  //else if(isTouching(movingRect,fixedRect2)){
    //movingRect.shapeColor = "red";
    //fixedRect2.shapeColor = "red";
  //}
  // else{
    //movingRect.shapeColor = "green";
    //fixedRect.shapeColor = "green";
    //fixedRect2.shapeColor = "green";
   //}
  drawSprites();
}

