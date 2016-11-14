//array of ball
var balls = [];
			
function setup()
{
  createCanvas(800, 400);
  
  // create 50 balls
  for(var i = 0; i < 50; i++)
  {
    balls[i] = new Ball(random(width),random(height),random(1,6),color(random(255),random(255),random(255)),random(20,60));
  }
}
 
function draw()
{
  background(255);
  
  // loop through each ball
  for(var i = 0; i < balls.length; i++)
  {
    balls[i].bounce();
    balls[i].display();
  }      
  
}
 
// ball constructor
function Ball(xpos,ypos,speed,color,size)
{
  this.xpos = xpos;
  this.ypos = ypos;
  this.speed = speed;
  this.color = color;
  this.size = size;
 
  // bounce method
  this.bounce = function()
  {
    if (this.ypos > height || this.ypos < 0) {
      this.speed = this.speed * -1;
    }
    this.ypos = this.ypos + this.speed;      
  }
 
  // display method
  this.display = function()
  {
    // draw the ball
    noStroke();
    fill(this.color);
    ellipse(this.xpos, this.ypos, this.size, this.size);
  }
}