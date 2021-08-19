const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,playerbase;
var computer,computerbase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  playerbase = new playerbase(300,random(450,height-300),180,150);
  player = new player(280,playerbase.body.position.y-150,50,180);
  computerbase = new computerbase(width-300,random(450,height-300),180,150);
  computer = new computer(width-280,computerbase.body.position.y-150,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  playerbase.display();
  computerbase.display();
   //display Player and computerplayer
  player.display();
  computer.display();
}
