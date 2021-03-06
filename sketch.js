const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, box1,box2,box3,box4,box5,box6,box7,box8,box9,box10, slingshot;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    polygon = new Bird(20,20)
    box1 = new Box(800,590,50,50)
    box2 = new Box(850,590,50,50)
    box3 = new Box(900,590,50,50)
    box4 = new Box(950,590,50,50)
    box5 = new Box(825,440,50,50)
    box6 = new Box(875,440,50,50)
    box7 = new Box(925,440,50,50)
    box8 = new Box(850,390,50,50)
    box9 = new Box(900,390,50,50)
    box10 = new Box(875,240,50,50)
    ground = new Ground(600,height,1200,20);
    slingshot = new SlingShot(polygon.body,{x: 200,y: 400})
}

function draw(){
    background("black")
    Engine.update(engine);
    strokeWeight(4)
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    polygon.display()
    ground.display()
    slingshot.display()
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}