var balls = [];
var r;
var g;
var b;

function setup(){
  createCanvas(800,400);


  var sizeSlider = createSlider(1,50,10,5);
  var speedSlider = createSlider(1,10,3,1);
  var colorSliderR = createSlider(0,255,60,10);
  var colorSliderG = createSlider(0,255,60,10);
  var colorSliderB = createSlider(0,255,60,10);
  var ballBtn = createButton("Make a ball");

  sizeSlider.position(10, 30);
  sizeSlider.changed(sizeChange);
  speedSlider.position(10,70);
  speedSlider.changed(speedChange);
  colorSliderR.position(10,110);
  colorSliderR.changed(colorChangeR);
  colorSliderG.position(10,150);
  colorSliderG.changed(colorChangeG);
  colorSliderB.position(10,190);
  colorSliderB.changed(colorChangeB);
  ballBtn.position(10,390);

  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  
  ballBtn.mouseClicked(function(){
    balls.push(new Ball(random(170,800), random(height)));
  });


}

function draw(){
  background(255);
  textSize(15);
  fill(0,0,0);
  textAlign(LEFT,TOP);
  text("Change Size", 10,15);
  text("Change Speed",10,55);
  text("Change Color(R)",10,95);
  text("Change Color(G)",10,135);
  text("Change Color(B)",10,175);
  
  for(var i=0; i < balls.length; i++){
    balls[i].display();
    balls[i].bounce();
  }
}

function sizeChange(){
  for(var i=0; i < balls.length; i++){
    balls[i].size = this.value();
  }
}

function colorChangeR(){
  for(var i=0; i<balls.length; i++){
    r = this.value();
    balls[i].color = color(r, g, b);
  }
}

function colorChangeG(){
  for(var i=0; i<balls.length; i++){
    g = this.value();
    balls[i].color = color(r, g, b);
  }
}

function colorChangeB(){
  for(var i=0; i<balls.length; i++){
    b = this.value();
    balls[i].color = color(r, g, b);
  }
}

function speedChange(){
  for(var i=0; i <balls.length; i++){
    balls[i].speed = this.value();
  }
}

function Ball(posx, posy){
  this.size = 20;
  this.posx = posx;
  this.posy = posy;
  this.color = color(r, g, b);
  this.speed = 3;
  


  this.display = function(){
    noStroke();
    fill(this.color);
    ellipse(this.posx, this.posy, this.size, this.size);
  }

  this.bounce = function()
  {
    if (this.posy > height || this.posy < 0) {
      this.speed = this.speed * -1;
    }
    this.posy = this.posy + this.speed;      
  }
}