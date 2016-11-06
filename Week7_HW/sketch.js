var waveLengthOne = 120.0;
var waveLengthTwo = 110.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;
var colorFrom, colorTo;
var lerpAmt = 0; 

function setup(){
  createCanvas(400,400);
  background(220);
  colorMode(HSB,360,100,100);
  colorFrom = color(0,100,100);
  colorTo = color(170,100,100);
  rectMode(CENTER);
}

function draw(){
  if(pointCount > 10000){
    noLoop();
  }
  translate(width/2, height/2);

  for(var i=0; i < pointCount; i++){
  anglex = i / waveLengthOne * TWO_PI;
  var y = sin(anglex)* amplitude;
  
  angley = i / waveLengthTwo * TWO_PI;
  var x = sin(angley)* amplitude;

  var lerpedColor = lerpColor(colorFrom,colorTo,lerpAmt);
  fill(lerpedColor);
  lerpAmt = map(sin(anglex),-1,1,0,1);

  if(i%2 === 1){
     ellipse(x,y,5,5); 
  }
  else{
    rect(x,y,10,10);
  }
  
  }

pointCount++;
}