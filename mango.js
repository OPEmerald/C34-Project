class Mango{
    constructor(x,y,width,height,boatPos){
        this.image = "mango.png"
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    
        this.boatPosition = boatPos;
        this.isBroken = false;
    
        World.add(world, this.body);
    }
    
    
  remove(index) {
    this.width = 300;
    this.height = 300;
    this.isBroken = true;
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      boats.splice(index, 1);
    }, 2000);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    noTint();
    pop();
  }

}