var colorFrom;
var colorTo;
//consider longer, more descriptive variable names
var h1,h2,h3;
var s1,s2,s3;
var b1,b2,b3;
var rectStep = 1;

function setup() {
  createCanvas(400,400);
  //since these are global variables anyway, you might as well assign these values outside of
  //the setup function
    h1 = 60, s1 = 30, b1 = 100;
    h2 = 60, s2 = 100, b2 = 100;
    h3 = 0, s3 = 0, b3 = 100;
    h4 = 0, s41 = 0, s42 = 100; b41 = 100, b42 =100;
  frameRate(2);
}

function draw() {
  colorMode(HSB,360,100,100);
  colorFrom = color(h1,s1,b1);
  colorTo = color(h2,s2,b2);
  
  for(var y = 0; y < height; y += rectStep){
    noStroke();
    var lerpAmt = map(y,0,height,0,1.0);
    var lerpedCol = lerpColor(colorFrom,colorTo,lerpAmt);
    fill(lerpedCol);
    rect(0,y,width,rectStep);
  }

    fill(h3,s3,b3);
    arc(200,150,100,100,0,PI,CHORD);

    stroke(h4,random(s41,s42),random(b41,b42));
    //stroke(h5,s5,random(s5));
    strokeWeight(8);
    for(var i = 160, j = 120; i <= 240 && j <= 280; i +=20, j +=40){
      line(i,220,j,260);
    }
}

function keyPressed(){
  //I like what you're going for, but I think you should change the color with the color() function,
  //rather than storing each individual hsb and changing them directly.  In the current configuration, a reader
  //of your code doesn't really see the relationship between colors.  Instead the reader only sees individual numbers.
  //Perhaps consider storing your colors in an array like we did in class.
  if(key === '1'){
    h1 = 60, s1 = 10, b1 = 100;
    h2 = 60, s2 = 100, b2 = 100;
    h3 = 0, s3 = 0, b3 = 100;
    h4 = 0, s41 = 0, s42 = 100; b41 = 100, b42 =100;
  }
  else if(key === '2'){
    h1 = 250, s1 = 100, b1 = 100;
    h2 = 250, s2 = 100, b2 = 10;
    h3 = 300, s3 = 0, b3 = 0;
    h4 = 30, s41 = 100, s42 = 100; b41 = 0, b42 =40;
  }
}
