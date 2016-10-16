var colorFrom;
var colorTo;
var rectStep = 1;

function setup() {
  createCanvas(400,400);
}

function draw() {
  colorMode(HSB,360,100,100);
  colorFrom = color(0,100,100);
  colorTo = color(0,100,0);

  for(var x = 0; x < width; x += rectStep){
    noStroke();
    var lerpAmt = map(x,0,width,0,1.0);
    var lerpedCol = lerpColor(colorFrom,colorTo,lerpAmt);
    fill(lerpedCol);
    rect(x,0,rectStep,height);
  }
}