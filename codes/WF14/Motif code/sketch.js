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
    let x0, y0, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5;
    let dx = a * cos(30);
    let dy = a * sin(30);
    push();
        translate(width * 0.5, height * 0.5);
        for (let i = 0; i < 6; i++) {
            push();
                rotate(60 * i);
                translate(dx, dy);
                beginShape();
                x0 = 0;
                y0 = 0;
                x1 = a * cos(30);
                y1 = a * sin(30);
                x2 = 0;
                y2 = 2 * y1;
                vertex(x0, -y0);
                vertex(x1, -y1);
                vertex(x2, -y2);
                endShape();
                beginShape();
                x3 = 2 * x1;
                y3 = 2 * y1;
                x4 = x3;
                y4 = y3 + a;
                x5 = x1;
                y5 = y1 + a;
                vertex(x1, -y1);
                vertex(x3, -y3);
                vertex(x4, -y4);
                if (i >= 3) {
                    vertex(x5, -y5);
                }
                endShape();
            pop();
        }
    pop();
}
