function setup() {
  createCanvas(481,361);
}

function draw() {
  background(255);
  stroke(128);
  strokeWeight(2);

  //Create the grid 
  for (var i=0; i<=360; i+=20){
  	line(0,i,480,i);
  }
  for (var j=0; j<=480; j+=20){
  	line(j,0,j,360);
  }

  stroke(0);
  strokeWeight(4);
  noFill();

  //Create the first left arc
  beginShape();
  curveVertex(0,0);
  curveVertex(0,0);
  curveVertex(120,100);
  curveVertex(90,240);
  curveVertex(30,360);
  curveVertex(30,360);
  endShape();

  //Create the second left arc
  beginShape();
  curveVertex(30,0);
  curveVertex(30,0);
  curveVertex(90,100);
  curveVertex(120,240);
  curveVertex(0,360);
  curveVertex(0,360);
  endShape();

  //Create the first right arc
  beginShape();
  curveVertex(480,0);
  curveVertex(480,0);
  curveVertex(360,100);
  curveVertex(390,240);
  curveVertex(450,360);
  curveVertex(450,360);
  endShape();

  //Create the second right arc
  beginShape();
  curveVertex(450,0);
  curveVertex(450,0);
  curveVertex(390,100);
  curveVertex(360,240);
  curveVertex(480,360);
  curveVertex(480,360);
  endShape();
}


