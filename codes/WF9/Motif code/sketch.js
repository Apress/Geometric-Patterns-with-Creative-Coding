/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 30;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noLoop();
    noFill();
}

function draw() {
    let x0,y0,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,x9,y9,x10,y10;
    x0 = 0;
    y0 = 0;
    x1 = 0.5 * a;
    y1 = 0;
    x2 = 2 * a * cos(60) + 0.5 * a;
    y2 = -(2 * a * sin(60));
    x3 = 1.5 * a;
    y3 = 0;
    x4 = 2.5 * a;
    y4 = 0;
    x5 = 1.5 * a;
    y5 = -a / tan(60);
    x6 = 0;
    y6 = (-2.5 * a) / tan(60);
    x7 = a * sin(30);
    y7 = -(2 * a * sin(60));
    x8 = 0;
    y8 = -(3 * a * sin(60));
    x9 = a * sin(30);
    y9 = -(4 * a * sin(60));
    x10 = 0;
    y10 = -(4 * a * sin(60));
    push();
        translate(width * 0.5, height * 0.5);
        for (let i = 0; i < 6; i++) {
            push();
                rotate(i * 60);
                translate(0, 5 * a * sin(60));
                beginShape();
                vertex(x0, y0);
                vertex(x1, y1);
                vertex(x2, y2);
                endShape();
                beginShape();
                vertex(x1, y1);
                vertex(x4, y4);
                endShape();
                beginShape();
                vertex(x3, y3);
                vertex(x5, y5);
                vertex(x6, y6);
                vertex(x7, y7);
                vertex(x8, y8);
                vertex(x9, y9);
                vertex(x10, y10);
                endShape();
                //mirror on y axis
                beginShape();
                vertex(-x0, y0);
                vertex(-x1, y1);
                vertex(-x2, y2);
                endShape();
                beginShape();
                vertex(-x1, y1);
                vertex(-x4, y4);
                endShape();
                beginShape();
                vertex(-x3, y3);
                vertex(-x5, y5);
                vertex(-x6, y6);
                vertex(-x7, y7);
                vertex(-x8, y8);
                vertex(-x9, y9);
                vertex(-x10, y10);
                endShape();

            pop();
        }
    pop();
}
