/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 60;
let b, c, d, e, f, h;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noLoop();
    noFill();
    b = (a * sin(120)) / sin(45);
    c = (a * sin(15)) / sin(45);
    d = (c * sin(90)) / sin(30);
    e = (d * sin(60)) / sin(90);
    f = (e + c) * sin(45);
    h = ((b + f) * sin(30)) / sin(60) - f;
}

function draw() {
    push();
        translate(width * 0.5, height * 0.5);
        let x0, y0, x1, y1, x2, y2, x3, y3;
        x0 = 0;
        y0 = 0;
        x1 = (2 * c + e) * cos(30);
        y1 = (2 * c + e) * sin(30);
        x2 = x1 + h * cos(15);
        y2 = y1 - h * sin(15);
        x3 = x1 + (c + h) * cos(15);
        y3 = y1 - (c + h) * sin(15);

        for (let i = 0; i < 12; i++) {
            push();
                rotate(45);
                rotate(i * 30);
                translate(0, -a);
                if (i % 2 == 0) scale(-1, 1);
                //every two step mirrored on the y-axis
                beginShape();
                vertex(x0, -y0);
                vertex(x1, -y1);
                vertex(x3, -y3);
                endShape();
                beginShape();
                vertex(-x0, -y0);
                vertex(-x1, -y1);
                vertex(-x2, -y2);
                endShape();
            pop();
        }
    pop();
}
