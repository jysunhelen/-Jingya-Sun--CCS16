function setup() {
  createCanvas(480,120);
}

function draw(){
  background(230);
  randomSeed(0);
  for (var i=10; i<width+35; i+=35){
    var scalar=random(0.25,1.0);
    bird(i,110,scalar);
  }
}

function bird(x,y,s){
  push();
  translate(x,y);
  scale(s); //Set the scale
  stroke(random(255),random(255),random(255));//Set the color
  strokeWeight(6);
  strokeJoin(ROUND);
  rect(0,-85,70,70); //Body
  strokeWeight(4);
  ellipse(21,-85,26,30); //Left eyepit
  ellipse(48,-85,26,30); //Right eyepit
  ellipse(25,-80,5,5); //Left eye
  ellipse(45,-80,5,5); //Right eye
  triangle(21,-70,48,-70,35,-45); //Beak

  beginShape();
  curveVertex(21,-70);
  curveVertex(21,-70);
  curveVertex(16,-45);
  curveVertex(0,-15);
  curveVertex(0,-15);
  endShape();

  beginShape();
  curveVertex(48,-70);
  curveVertex(48,-70);
  curveVertex(54,-45);
  curveVertex(70,-15);
  curveVertex(70,-15);
  endShape();
  
  //Left claw
  line(16,-15,16,0);
  line(16,0,4,5);
  line(3,-2,20,2);

  //Right claw
  line(54,-15,54,0);
  line(54,0,66,5);
  line(67,-2,50,2);

  //Tail
  beginShape();
  curveVertex(25,-15);
  curveVertex(25,-15);
  curveVertex(24,-5);
  curveVertex(31,-10);
  curveVertex(35,0);
  curveVertex(39,-10);
  curveVertex(46,-5);
  curveVertex(45,-15);
  curveVertex(45,-15);
  endShape();

  strokeWeight(1);
  line(2,-30,8,-40);
  line(2,-40,8,-50);
  line(68,-30,62,-40);
  line(68,-40,62,-50);
  line(35,-85,25,-110);
  line(35,-85,45,-110);

  strokeWeight(2);
  line(30,-65,30,-64); //Left nostril
  line(39,-65,39,-64); //Right nostril

  pop();
}