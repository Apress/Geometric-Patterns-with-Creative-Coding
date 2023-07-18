
/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 60;

function setup() {  
	createCanvas(400, 400);
	angleMode(DEGREES);
  noFill();
  noLoop();
}
function draw() {  
	let x0,y0,x1,y1,x2,y2,x3,y3;
	push();
		translate(width*0.5, height*0.5);
  		for(let i=0; i<6; i++){
    		push();
    			rotate(i*60);
			    //move to the right by its width size
    			translate(cos(30)*a*2,0);
          //line one
          beginShape();
          x0 = a * cos(30);
          y0 = a * sin(30);
          vertex(x0,y0);
          x1 = -1 * x0;
          y1 = -1 * y0;
          vertex(x1,y1);
          endShape();
          //line two
          beginShape();
          x2 = x0;
          y2 = y1;
          vertex(x2,y2);
          x3 = x1;
          y3 = y0;
          vertex(x3,y3);
          endShape();
    		pop();
  	  }	
  pop();  
}