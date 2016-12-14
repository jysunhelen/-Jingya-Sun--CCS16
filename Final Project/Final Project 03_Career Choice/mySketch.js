var colorFrom;
var colorTo;
var rectStep = 1;
var personImg;
var careerImg = [];
var selectedImg;

function preload() {
  personImg = loadImage("https://www.openprocessing.org/sketch/394375/files/person.png");
  careerImg[0] = loadImage("https://www.openprocessing.org/sketch/394375/files/boxer.png");
  careerImg[1] = loadImage("https://www.openprocessing.org/sketch/394375/files/director.png");
  careerImg[2] = loadImage("https://www.openprocessing.org/sketch/394375/files/engineer.png");
  careerImg[3] = loadImage("https://www.openprocessing.org/sketch/394375/files/firefighter.png");
  careerImg[4] = loadImage("https://www.openprocessing.org/sketch/394375/files/magician.png");
  careerImg[5] = loadImage("https://www.openprocessing.org/sketch/394375/files/nurse.png");
  careerImg[6] = loadImage("https://www.openprocessing.org/sketch/394375/files/scientist.png");
  careerImg[7] = loadImage("https://www.openprocessing.org/sketch/394375/files/singer.png");
}

function setup() {
  createCanvas(600,600);
  colorMode(HSB,360,100,100);
  colorFrom = color(60,100,100);
  colorTo = color(60,30,100);

  for(var x = 0; x < height; x += rectStep){
    noStroke();
    var lerpAmt = map(x,0,width,0,1.0);
    var lerpedCol = lerpColor(colorFrom,colorTo,lerpAmt);
    fill(lerpedCol);
    rect(x,0,rectStep,height);
  }
  
 var choiceBtn = createButton("Choose Career");
 choiceBtn.position(250,50);
  selectedImg = new DisplayedImg();
      choiceBtn.mouseClicked(function(){
        selectedImg = new DisplayedImg();
  }); 
}

function draw() {
  imageMode(CENTER);
  image(personImg,width/4,height/2,personImg.width,personImg.height);
  selectedImg.display();
  textSize(24);
  fill(0,100,0);
  text("Which Career ?",80,120);
  text("Career Choice",370,120);
}

function DisplayedImg(){
  this.choice = random(careerImg);
  this.display = function(){
    image(this.choice,width*3/4,height/2,180,300);
  }
}