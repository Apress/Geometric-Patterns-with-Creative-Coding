/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

let a = 48; //inner Radius, scale factor
let b; //outer Radius

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noFill();
  noLoop();
  b = a * (sin(135) / sin(15));
}

function draw() {
  let angle = 30;

  push();
    translate(width*0.5,height*0.5);
    beginShape();
    for (let i = 0; i < 12; i++) {
      let sx,sy;
      if(i%2==0){
        sx = cos(i*angle) * b;
        sy = sin(i*angle) * b;
      }else{
        sx = cos(i*angle) * a;
        sy = sin(i*angle) * a;
      }
      vertex(sx, sy);
    }
    endShape(CLOSE);
  pop();
}