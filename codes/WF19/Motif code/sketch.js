/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 50;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noFill();
    noLoop();
}
function draw() {
    let b = 2 * a * cos(67.5);
    let c = (3 * b * sin(22.5)) / sin(112.5);
    let x0, y0, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6;

    x0 = 0;
    y0 = a;
    x1 = 2 * a * cos(45);
    y1 = 2 * a * sin(45) + a;
    x2 = x1 + b * cos(22.5);
    y2 = y1 - b * sin(22.5);
    x3 = a * cos(45);
    y3 = a * sin(45);
    x4 = x3;
    y4 = y3 + 2 * a;
    x5 = 0;
    y5 = 3 * a;
    x6 = c * cos(22.5);
    y6 = y5 + c * sin(22.5);

    push();
        translate(width * 0.5, height * 0.5);
        rotate(45);
        for (let i = 0; i < 4; i++) {
            push();
                rotate(90 * i);
                //right side
                beginShape();
                vertex(x0, -y0);
                vertex(x1, -y1);
                vertex(x2, -y2);
                endShape();
                beginShape();
                vertex(x3, -y3);
                vertex(x4, -y4);
                vertex(x5, -y5);
                vertex(x6, -y6);
                endShape();
                //left side
                push();
                    scale(-1, 1);
                    beginShape();
                    vertex(x0, -y0);
                    vertex(x1, -y1);
                    vertex(x2, -y2);
                    endShape();
                    beginShape();
                    vertex(x3, -y3);
                    vertex(x4, -y4);
                    vertex(x5, -y5);
                    vertex(x6, -y6);
                    endShape();
                pop();
            pop();
        }
    pop();
}
