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
    noLoop();
    noFill();
}

function draw() {

    b = a * cos(45);
    c = b * tan(30);

    let x0, y0, x1, y1, x2, y2;
    x0 = -b;
    y0 = 0;
    x1 = 0;
    y1 = b;
    x2 = -x0;
    y2 = 0;

    push();
        translate(width * 0.5, height * 0.5);
        rotate(90);
        for (let k = 0; k < 6; k++) {
            push();
                rotate(k * 60);
                translate(0, 2 * b * sin(60) - c + 0.5 * a * (sin(45) / sin(30)));
                rotate(60);
                for (let i = 0; i < 3; i++) {
                    push();
                        rotate(120 * i);
                        translate(0, -c);
                        beginShape();
                        vertex(x0, -y0);
                        vertex(x1, -y1);
                        vertex(x2, -y2);
                        endShape();
                    pop();
                }
            pop();
        }
    pop();
}
