const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const MouseConstraint=Matter.MouseConstraint;

var engine,world,mConstraint;
var pendulum1;

function setup(){
    canvas=createCanvas(WindowWidth/2, WindowHeight/1.5);
    engine=Engine.create();
    world=engine.world;

    let canvasmouse=Mouse.create(canvas.elt);
    canvasmouse.pixelRatio=pixelDensity();
    let options={
        mouse:canvasmouse
    };
    mConstraint=MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
    pendulum1=new pendulum1(200,200,50,50);
}
function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body, { x:mouseX, y:mouseY } )
}