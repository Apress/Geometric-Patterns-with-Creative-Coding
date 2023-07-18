/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 80;
let b;

function setup() {  
	createCanvas(400, 400);
  angleMode(DEGREES);  
  b = 2 * a * cos(30);
  noFill();
  noLoop();
}
function draw() {  
	let x,y;
	push();
    translate(width*0.5, height*0.5);
    beginShape();
      for(let i=0;i<12;i++){
        if(i%2==0){
          x = a*cos(30*i);
          y = a*sin(30*i);
        }else{
          x = b*cos(30*i);
          y = b*sin(30*i);
        }
        vertex(x,y);
      }
    endShape(CLOSE);
  pop(); 
}