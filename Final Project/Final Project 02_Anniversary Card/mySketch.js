var backgroundImg;
var heartImg;
var music;
var hearts = [];

var years = ["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11st","12nd","13rd","14th","15th","16th","17th","18th","19th","20th"];
var husband = ["Adams",,"Aaron","Bart","Berg","Bob","Caesar","Carl","Duke","Edward","Frank","Gavin","Harry","James","Leo","Matt","Roy","Tony"];
var wife = ["Emma","Olivia","Sarah","Grace","Lily","Kayla","Julia","Zoe","Paige","Ruby","Lydia","Diana","Daisy","Ellie","Karen","Kelly","Heidi"];

function preload(){
  backgroundImg = loadImage("https://www.openprocessing.org/sketch/394564/files/background.jpg");
  heartImg = loadImage("https://www.openprocessing.org/sketch/394564/files/heart02.png");
  music = loadSound("https://www.openprocessing.org/sketch/394564/files/music.mp3");
}

function setup() {
  createCanvas(backgroundImg.width, backgroundImg.height);
  music.loop();
  for(i=0; i<15; i++){
    hearts[i] = new HeartDisplay(random(backgroundImg.width), random(10, 100), random(1, 3), heartImg);
  }
  var generateBtn = createButton("Generate Anniversary");
  generateBtn.position(300,600);
  changeAnni = new AnniChange();
  generateBtn.mouseClicked(function(){
    changeAnni = new AnniChange();
  });

}

function draw(){
	imageMode(CENTER);
	image(backgroundImg, width/2, height/2, backgroundImg.width, backgroundImg.height);
  for(var i = 0; i < hearts.length; i++){
    hearts[i].bounce();
    hearts[i].display();
  }
	changeAnni.display();
}

function HeartDisplay(posx, posy, speed, img){
  this.posx = posx;
  this.posy = posy;
  this.size = random(30,50);
  this.speed = speed;
  this.heart = img;
  
  this.bounce = function(){
    if (this.posx > backgroundImg.width ) {
    	this.posx = random(0,100);
    }
    this.posx = this.posx + this.speed;      
  }
  
  this.display = function(){
    image(this.heart,this.posx,this.posy, this.size,this.size);
  }
}

function AnniChange(){
  this.anniyear = random(years);
  this.husbandName = random(husband);
  this.wifeName = random(wife);
  var line01 = "Happy" + " " + this.anniyear + " " + "Anniversary";
  var line02 = this.husbandName + " " + "and" + " " + this.wifeName;
  this.display = function(){
    textAlign(CENTER);
    fill(153,255,204);
    textSize(40);
    textStyle(BOLD);
    textFont("Cooper Black");
  	text(line01,width/2,300);
  	text(line02,width/2,400);
  }
}