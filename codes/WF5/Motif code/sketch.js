/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 20;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noFill();
  noLoop();
}

function draw() {
  push();
    translate(width*0.5,height*0.5);
    for(let i=0;i<6;i++){
      push();
        rotate(60*i);
        translate(4*a,0);
        beginShape();
        //hexagon
        for(let k=0;k<6;k++){
          let x = 3 * a * cos(k*60);
          let y = 3 * a * sin(k*60);
          vertex(x,y);
        }
        endShape(CLOSE);
      pop();
    }
  pop();
}