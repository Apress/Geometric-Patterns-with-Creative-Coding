/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 80;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noFill();
    noLoop();
}

function draw() {
    let x0, y0, x1, y1;
    x0 = 0;
    y0 = 0;
    x1 = a * cos(30);
    y1 = a * sin(30);

    push();
        translate(width * 0.5, height * 0.5);
        for (let i = 0; i < 12; i++) {
            push();
                rotate(i * 30);
                translate(0, -a);
                beginShape();
                vertex(x1, -y1);
                vertex(x0, y0);
                vertex(-x1, -y1);
                endShape();
            pop();
        }
    pop();
}
