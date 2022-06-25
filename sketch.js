
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, backgroundImg;

var canvas, boy, angle, mango, rock;
var ground;
var rocks = [];
var mangos = []
var score = 0
var isGameOver = false;



function preload(){
  backgroundImg = loadImage("download.jpg");
}

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  boy = new Boy(400, 250, 100, 50, angle)
}


function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
 
  boy.display();

  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();

  showMangoes();

  for (var i = 0; i < rocks.length; i++) {
    showRocks(rocks[i], i);
    collisionWithBoat(i);
  }

  fill("#6d4c41");
  textSize(40);
  text(`Score:${score}`, width - 200, 50);
  textAlign(CENTER, CENTER);
}

function collisionWithMango(index){
  for (var i = 0; i < mangos.length; i++) {
    if (rocks[index] !== undefined && mangos[i] !== undefined) {
      var collision = Matter.SAT.collides(rocks[index].body, mangos[i].body);

      if (collision.collided) {
        score+=5
          mangos[i].remove(i);
        

        Matter.World.remove(world, rocks[index].body);
        delete rocks[index];
      }
    }
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var rock = new Rock(boy.x, boy.y);
    rock.trajectory = [];
    Matter.Body.setAngle(rock.body, boy.angle);
    rocks.push(rock);

  }
}

function showRocks(rock, index) {
  if (rock) {
    rock.display();
    if (rock.body.position.x >= width || rock.body.position.y >= height - 50) {
      rock.remove(index);
    }
  }
}

function showMangoes() {
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      var mango = new Mango(
        width,
        height - 100,
        170,
        170,
        position,
        Matter.Body.setVelocity(mango,{
          x: 0,
          y: 0
        })
      );

      mangos.push(mango);
    }

function keyReleased() {
  if (keyCode === DOWN_ARROW && !isGameOver) {
    rocks[rocks.length - 1].shoot();
  }
}



