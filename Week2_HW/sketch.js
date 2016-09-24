var x = 40;
var y = 80;
var h = 30;
var s = 320;
var m = 180;

function setup() {
  createCanvas(400,560);
  //noStroke();
}

function draw() {
  background( 253,245,230);
  noStroke();
  
  //Create two gray rectangles
  fill(105,105,105);
  rect(x, y, s, h);
  rect(x, y+380, s, h);
  
  //Create the blue polygon in the middle of the canvas
  fill(70,130,180);
  rect(x+m, y+h, h, s+h);
  rect(x+100, y+m, s-100, h);
  quad(x+40, y+160, x+100, y+m, x+100, y+210, x+40, y+190);

  //Create two black quadranles
  fill(0,0,0);
  quad(x+80, y+h, x+110, y+h, x+40, y+160, x+15, y+150);
  rect(x, y+210, x+60, m-10);

  //Create the yellow quadrangle
  fill(205, 205, 0);
  quad(x+100, y+300, x+135, y+300, x+m, y+380, x+145, y+380);

  //Create the green polygon in the lower right corner
  fill(46, 139, 87);
  rect(x+260, y+220, h-10, m-60);
  rect(x+280, y+260, h+10, h-10);
  quad(x+210, y+240, x+260, y+260, x+260, y+280, x+210, y+260);

  noFill();
  strokeWeight(2);
  
  //Create the red cross in the upper left corner
  stroke(165,42,42);
  line(x, y+70, x+60, y+70);
  line(x+30, y+40, x+30, y+100);
  
  //Create the circle with yellow edge in the upper lefr corner
  stroke(205, 205, 0);
  ellipse(x+130, y+120, 2.5*h, 2.5*h);

  //Create the blue cross in the upper right corner
  stroke(70,130,180);
  line(x+225, y+60, x+285, y+60);
  line(x+255, y+h, x+255, y+90);

  //Create the quadranle with black edge in the upper right corner
  stroke(0,0,0);
  beginShape();
  vertex(x+265, y+m);
  vertex(x+240, y+100);
  vertex(x+270, y+100);
  vertex(x+295, y+m);
  endShape();

  //Create the circle with red edge in the upper right corner
  stroke(165,42,42);
  ellipse(x+290, y+85, 1.5*h, 1.5*h);

  //Create the quadrangle with white edge in the lower left corner
  stroke(255,255,255);
  quad(x+60, y+250, x+90, y+250, x+40, y+340, x+10, y+340);

  //Create the yellow straight line in the lower left corner
  stroke(205, 205, 0);
  line(x+h, y+265, x+100, y+265);

  //Create the red corss in the lower left corner
  stroke(165,42,42);
  line(x+100, y+265, x+165, y+265);
  line(x+135, y+240, x+135, y+290);

  //Create the black cross in the lower right corner
  stroke(0,0,0);
  line(x+240, y+240, x+s, y+240);
  line(x+295, y+210, x+295, y+325);
}
 