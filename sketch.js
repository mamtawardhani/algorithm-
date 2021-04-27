var movingRect ,  fixedRect


function setup() {
  createCanvas(800,400);

  movingRect = createSprite(600, 200, 40, 80) //20
  fixedRect = createSprite(400, 200 , 80 ,40) //40
  
  movingRect.shapeColor = "green"
  fixedRect.shapeColor="green"
  
}

function draw() {
  background("black");  

  movingRect.debug = true
  fixedRect.debug = true
  movingRect.x = mouseX
  movingRect.y = mouseY


  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2 ){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor = "green"
  fixedRect.shapeColor="green"
  }

  console.log(movingRect.x - fixedRect.x)

  drawSprites();
}