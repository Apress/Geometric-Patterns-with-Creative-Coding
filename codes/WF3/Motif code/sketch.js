
/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 120;
let b;

function setup() {  
  createCanvas(400, 400);
  angleMode(DEGREES);
  noFill();
  noLoop();
  b = a * (sin(45) / sin(112.5));
}
function draw() {  
	let x,y;
	push();
    translate(width*0.5, height*0.5);
    rotate(22.5);
    beginShape();
    for (let i = 0; i < 8; i++) {
      let sx = cos(i*45) * b;
      let sy = sin(i*45) * b;
      vertex(sx, sy);
      sx = a * cos(i *45 + 45*0.5);
      sy = a * sin(i *45 + 45*0.5);
      vertex(sx, sy);
    }
    endShape(CLOSE);
  pop(); 
}
