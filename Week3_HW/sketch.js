function setup() {
  createCanvas(330,330);
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(4.5);
 
  for (var x1 = 50; x1 <=280; x1 += 10){ 
    var y1 = 50;
    beginShape();
    vertex(x1,y1);
    vertex(x1,y1+230);
    endShape();
  }

  for (var y2 = 50; y2 <= 280; y2 +=10){
    var x2 = 50;
    beginShape();
    vertex(x2,y2);
    vertex(x2+230,y2);
    endShape();
  }

translate (-55,95);
rotate (-PI/6.5);
for (var x3 = 50; x3 <=280; x3 += 10){ 
    var y3 = 50;
    beginShape();
    vertex(x3,y3);
    vertex(x3,y3+230);
    endShape();
  }

  for (var y4 = 50; y4 <= 280; y4 +=10){
    var x4 = 50;
    beginShape();
    vertex(x4,y4);
    vertex(x4+230,y4);
    endShape();
  }
  
}
