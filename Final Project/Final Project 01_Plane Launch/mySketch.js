var colorFrom;
var colorTo;
var rectStep = 1;
var planes = [];
var selectedPlane;
var cloudImg;
var clouds = [];

//load image
function preload(){
  planes[0] = loadImage("https://www.openprocessing.org/sketch/394630/files/plane01.png");
  planes[1] = loadImage("https://www.openprocessing.org/sketch/394630/files/plane02.png");
  planes[2] = loadImage("https://www.openprocessing.org/sketch/394630/files/plane03.png");
  planes[3] = loadImage("https://www.openprocessing.org/sketch/394630/files/plane04.png");
  planes[4] = loadImage("https://www.openprocessing.org/sketch/394630/files/plane05.png");
  planes[5] = loadImage("https://www.openprocessing.org/sketch/394630/files/plane06.png");
  cloudImg = loadImage("https://www.openprocessing.org/sketch/394630/files/cloud02.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  
  
  for(i=0; i<10; i++){
    clouds[i] = new CloudDisplay(random(windowWidth), random(10, 100), random(1, 2), cloudImg);
  }
  
//array of plane
  for (var i = 0; i < 6; i++) {
    planes[i] = new Plane(planes[i], 50+i * 200, 480, 150,150);
  }
//btn to lanuch random plane: if duplicated then not launch any plane
  var btn = createButton("Launch");
  btn.position(1250,600);
  btn.mouseClicked(function(){
    selectedPlane = random(planes);
  }); 
}

function draw() {
  
  colorMode(HSB,360,100,100);
  colorFrom = color(228,20,100);
  colorTo = color(228,100,100);
  for(var y = 0; y < height; y += rectStep){
    noStroke();
    var lerpAmt = map(y,0,height,0,1.0);
    var lerpedCol = lerpColor(colorFrom,colorTo,lerpAmt);
    fill(lerpedCol);
    rect(0,y,width,rectStep);
  }
 
  for(var i = 0; i < clouds.length; i++){
    clouds[i].cloudbounce();
    clouds[i].clouddisplay();
  }
  
  for (var i = 0; i < planes.length; i++) {
    planes[i].display();
  }
//initial selectedPlane is null
  if (selectedPlane != null) {
    selectedPlane.move();
  }
}

function CloudDisplay(posx, posy, speed, cimg){
  this.posx = posx;
  this.posy = posy;
  this.cloudsize = random(80,150);
  this.speed = speed;
  this.cloud = cimg;
  
  this.cloudbounce = function(){
    if (this.posx > windowWidth ) {
    	this.posx = random(0,100);
    }
    this.posx = this.posx + this.speed;      
  }
  
  this.clouddisplay = function(){
    image(this.cloud, this.posx, this.posy, this.cloudsize,this.cloudsize*0.5);
  }
}

function Plane(img, startX, startY, size) {
  this.img = img;
  this.positionX = startX;
  this.positionY = startY;
  this.size = size;
  this.display = function() {
    image(this.img, this.positionX, this.positionY, this.size,this.size);
  }
  this.move = function() {
    if (this.positionY < windowHeight ) {
      this.positionY = this.positionY - 10;
    }
  }
}