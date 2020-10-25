const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(10,380,width*2,20);
  ground1 = new Ground(500,340,280,10);

  block1 = new Block(410,280,30,40);
  block2 = new Block(440,280,30,40);
  block3 = new Block(470,280,30,40);
  block4 = new Block(500,280,30,40);
  block5 = new Block(530,280,30,40);
  block6 = new Block(560,280,30,40);
  block7 = new Block(590,280,30,40);

   block8 = new Block(440,260,30,40);
  block9 = new Block(470,260,30,40);
  block10 = new Block(500,260,30,40);
  block11 = new Block(530,260,30,40);
  block12 = new Block(560,260,30,40);

  block13 = new Block(470,240,30,40);
  block14 = new Block(500,240,30,40);
  block15 = new Block(530,240,30,40);

  block16 = new Block(500,210,30,40);

  ground2 = new Ground(900,200,200,10);

  block17 = new Block(840,160,30,40);
  block18 = new Block(870,160,30,40);
  block19 = new Block(900,160,30,40);
  block20 = new Block(930,160,30,40);
  block21 = new Block(960,160,30,40);

  block22 = new Block(870,120,30,40);
  block23 = new Block(900,120,30,40);
  block24 = new Block(930,120,30,40);

  block25 = new Block(900,80,30,40);

  polygon = new Polygon(50,200,30);

  slingshot = new SlingShot(polygon.body,{x:150, y:200});
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  ground1.display();
  fill("lightblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("lightgreen");
  block13.display();
  block14.display();
  block15.display();
  fill("gray");
  block16.display();

  ground2.display();
  fill("lightblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("lightgreen");
  block22.display();
  block23.display();
  block24.display();
  fill("pink");
  block25.display();

  polygon.display();
  slingshot.display();
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	slingshot.fly();
}

