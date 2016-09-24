function setup() {
  createCanvas(480,280);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  strokeWeight(2);
  quad(0,100,100,120,230,90,80,60);  //A quadrangle
  triangle(50,120,30,270,180,90);    //A triangle
  rect(240,10,200,100);              //A rectangle
  
  //A pentagon
  beginShape();
  vertex(10,10);
  vertex(120,60);
  vertex(400,125);
  vertex(320,20);
  vertex(250,45);
  endShape(CLOSE);

  //A hexagon
  beginShape();
  vertex(300,20);
  vertex(200,10);
  vertex(50,240);
  vertex(230,240);
  vertex(400,270);
  vertex(270,200);
  endShape(CLOSE);
  
  //A heptagon
  beginShape();
  vertex(475,10);
  vertex(420,40);
  vertex(400,100);
  vertex(470,220);
  vertex(200,270);
  vertex(220,150);
  vertex(100,90);
  endShape(CLOSE);
}