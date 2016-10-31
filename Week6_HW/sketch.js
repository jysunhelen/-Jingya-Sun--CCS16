function setup(){
	createCanvas(600,600);
}

function draw(){
	colorMode(HSB,360,100,100);
	colorFrom=color(0,100,100);
	colorTo=color(0,100,0);
	
	angleMode(DEGREES);
	background(200);
	
	translate(width/2,height/2);
	
	for(var x=0, y=0, angle=0; x<=width && y<=height; x+=0.5, y+=0.5, angle+=PI/240){
		noStroke();
		var lerpAmt=map(x,0,width,0,1.0);
		var lerpedCol=lerpColor(colorFrom,colorTo,lerpAmt);
		fill(lerpedCol);
		rotate(angle);
		ellipse(x,y,30,30);
	}
}