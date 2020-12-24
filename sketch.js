var car, carsGroup, wall;
var column1, column2, column3, column4, horColumn1, horColumn2, horColumn3, horColumn4, horColumn5, 
    horColumn6, horColumn7, horColumn8;
var speed, weight, deformation;
var gameState = "play";

function setup() 
{
  createCanvas(1600, 400);
  deformation = new Array();
  weight = new Array();
  speed = new Array();
  carsGroup = createGroup();
  wall = createSprite(1500, 196, 60, 322);
  wall.shapeColor = rgb(199, 128, 36);
  column1 = createSprite(850, 195, 5, 320);
  column2 = createSprite(950, 196, 5, 319);
  column3 = createSprite(1050, 196, 5, 319);
  column4 = createSprite(1150, 196, 5, 319);
  column1.shapeColor = "white";
  column2.shapeColor = "white";
  column3.shapeColor = "white";
  column4.shapeColor = "white"
  horColumn1 = createSprite(1160, 64 + 67/2, 620, 5);
  horColumn2 = createSprite(1160, 64*2 + 67/2, 620, 5);
  horColumn3 = createSprite(1160, 64*3 + 67/2, 620, 5);
  horColumn4 = createSprite(1160, 64*4 + 67/2, 620, 5);
  horColumn5 = createSprite(1160, 64*5 + 67/2, 620, 5);
  horColumn6 = createSprite(1160, 64*6 + 67/2, 620, 5);
  horColumn7 = createSprite(1160, 64*7 + 67/2, 620, 5);
  horColumn8 = createSprite(1160, 37, 620, 5);
  horColumn1.shapeColor = "white";
  horColumn2.shapeColor = "white";
  horColumn3.shapeColor = "white";
  horColumn4.shapeColor = "white";
  horColumn5.shapeColor = "white";
  horColumn6.shapeColor = "white";
  horColumn7.shapeColor = "white";
  horColumn8.shapeColor = "white";
  column1.visible = false;
  column2.visible = false;
  column3.visible = false;
  column4.visible = false;
  horColumn1.visible = false;
  horColumn2.visible = false;
  horColumn3.visible = false;
  horColumn4.visible = false;
  horColumn5.visible = false;
  horColumn6.visible = false;
  horColumn7.visible = false;
  horColumn8.visible = false;
  for(var i = 1; i < 6; i++)
  {
    car = createSprite(50, i * 66 , 40, 40);
    wall.depth = car.depth;
    car.depth = car.depth - 1;
    car.shapeColor = "white";
    speed[i] = random(55, 90);
    weight[i] = random(400, 1500);   
    car.velocityX = speed[i];
    carsGroup.add(car);
    deformation[i] = 0.5*weight[i]*speed[i]*speed[i]/22509;
  }
}

function draw()
{
  background("black");
  if(gameState === "play" || gameState === "end")
  {
    for(var i = 1; i < 6; i++)
  {
   if(wall.x - carsGroup.get(i - 1).x < carsGroup.get(i - 1).width/2 + wall.width/2)
   {
     gameState = "end";
     fill("white");
     textFont("comic sans");
     textSize = 12;
     text(Math.round(deformation[i]), 1100, i * 67);
     text(Math.round(weight[i]), 1000, i * 67);
     text(Math.round(speed[i]), 900, i * 67);
     carsGroup.get(i - 1).velocityX = 0;
     if(deformation[i] >= 180)
     {
      carsGroup.get(i - 1).shapeColor = "red";
     }
     if(deformation[i] < 180 && deformation[i] >= 100)
     {
      carsGroup.get(i - 1).shapeColor = "yellow";
     }
     if(deformation[i] < 100)
     {
      carsGroup.get(i - 1).shapeColor = "green";
     }
    
   }  
  }
  }
  if(gameState === "end")
  {
    text("Speed                         Weight                Deformation", 882, 20);
    column1.visible = true;
    column2.visible = true;
    column3.visible = true;
    column4.visible = true;
    horColumn1.visible = true;
    horColumn2.visible = true;
    horColumn3.visible = true;
    horColumn4.visible = true;
    horColumn5.visible = true;
    horColumn6.visible = true;
    horColumn7.visible = true;
    horColumn8.visible = true;
  }
  drawSprites();
}