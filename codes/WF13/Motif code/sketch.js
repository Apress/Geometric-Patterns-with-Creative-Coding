/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 40;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noFill();
  noLoop();
}

function draw() {
  let x0,y0,x1,y1,x2,y2,x3,y3;
  x0 = 0;
  y0 = a * sin(60);
  x1 = a * cos(60);
  y1 = 0;
  x2 = x1 + a;
  y2 = 0;
  x3 = 0;
  y3 = 3*a * sin(60);
  
  push();
    translate(width*0.5,height*0.5);
    for(let i=0;i<6;i++){
      push();
        rotate(i*60);
        push();
          translate(2*a+a*cos(60),2*a*sin(60));
          beginShape();
          vertex(x0,-y0);
          vertex(x1,-y1);
          vertex(x2,-y2);
          vertex(x3,-y3);
          endShape();
          //mirror on y-axis
          push();
            scale(-1,1);
            beginShape();
            vertex(x0,-y0);
            vertex(x1,-y1);
            vertex(x2,-y2);
            vertex(x3,-y3);
            endShape();
          pop();
        pop();
      pop();
    }
  pop();
}
