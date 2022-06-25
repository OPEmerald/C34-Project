class Boy {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = 750;
      this.height = 500;
      this.angle = angle;
      this.cannon_image = loadImage("Untitled.png");
    }
    display() {
      if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
        this.angle += 1;
      }
  
      if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
        this.angle -= 1;
      }
  
  
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.cannon_image, 0, 60, this.width, this.height);
      pop();
    }
  }
  