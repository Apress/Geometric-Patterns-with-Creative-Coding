/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 40;
let b;
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  noLoop();
  noFill();
  b = a * (sin(45)/sin(22.5));
}
function draw() {
  let x0, y0, x1, y1, x2, y2;
  let dx = a + b * cos(67.5);
  let dy = dx;
  push();
    translate(width*0.5,height*0.5);
    for (let k=0;k<4;k++){
      push();
        //mirroring
        switch (k) {
          case 0:
            scale(1,1);
            break;
          case 1:
            scale(1,-1);
            break;
          case 2:
            scale(-1,-1);
            break;
          case 3:
            scale(-1,1);
            break;
          default:
          //
        }
        translate(dx,-dy);
        //quarter shape
        for (let i=0;i<4;i++) {
          rotate(i*90);
          beginShape();
          x0 = 0;
          y0 = 0;
          x1 = a;
          y1 = 0;
          x2 = a + b * cos(67.5);
          y2 = b * sin(67.5);
          vertex(x0,-y0);
          vertex(x1,-y1);
          vertex(x2,-y2);
          endShape();
        }
      pop();
    }
  pop();
}

