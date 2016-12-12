var table;

function preload(){
  table = loadTable('https://www.openprocessing.org/sketch/392710/files/running.csv',"csv","header",function(){
    println('loaded data');
  });
}

function setup(){
	createCanvas(600,400);
	textSize(10);
}

function draw(){
	background(255);
	translate(20,20);
	//rectMode(CENTER)
    text("Miles of Running for One Week",-10,-10);
  
	for(var c = 0; c < table.getColumnCount(); c++){
		for(var r = 0; r < table.getRowCount(); r++){
			push();
			var cellData = table.getString(r,c);
			if(cellData != undefined){
				if(c < 1){
					translate(10,r*20);
					text(cellData,20,20);
				}
				else{
					translate((c*25)+80, r*20-8);
                  	if(cellData < 3){
                      fill(255,0,0);
					  rect(0,20,cellData*20,10);
                    }else{
                      fill(0,255,0);
                      rect(0,20,cellData*20,10);
                    }
				}
			}
          
			pop();
		}
	}
  
  //textAlign(LEFT,TOP);
  
}