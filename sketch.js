
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var bob1,bob2,bob3,bob4,bob5;

var roof,roof2,roof3,roof4,roof5;

var rop1,rop2,rop3,rop4,rop5;

var bobd;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(205,350,50);
	bob2=new Bob(251,350,50);
	bob3=new Bob(301,350,50);
	bob4=new Bob(351,350,50);
	bob5=new Bob(401,350,50);

	roof=new Roof(300,100,350,20);
	//roof2=new Roof(250,100,50,20);
	//roof3=new Roof(300,100,50,20);
	//roof4=new Roof(350,100,50,20);
	//roof5=new Roof(400,100,50,20);

	bobd=35;
 	rop1=new Rope(bob1.body,roof.body,-98,0);
	rop2=new Rope(bob2.body,roof.body,-48,0);
	rop3=new Rope(bob3.body,roof.body,0,0);
	rop4=new Rope(bob4.body,roof.body,48,0);
	rop5=new Rope(bob5.body,roof.body,98,0);
	
	bob1.debug=true;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

  if(keyCode===LEFT_ARROW)
{
  
	
	
Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:1});

console.log("done");


keyCode=0;




}

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
 // roof2.display();
  //roof3.display();
//  roof4.display();
 // roof5.display();

  rop1.display();
  rop2.display();
  rop3.display();
  rop4.display();
  rop5.display();
  
  drawSprites();
 
}



