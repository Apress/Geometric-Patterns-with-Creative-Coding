/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 120;
let b, c, d;
function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noFill();
    noLoop();
}

function draw() {
    push();
        translate(width * 0.5, height * 0.5);
        //align to the original shape
        rotate(30);

        b = (a * sin(40)) / sin(70);
        c = b * 0.5;
        d = (c * sin(40)) / sin(30);

        let x0, y0, x1, y1, x2, y2, x3, y3;
        x0 = 0;
        y0 = 0;
        x1 = b * cos(20);
        y1 = b * sin(20);
        x2 = x1 + c * cos(60);
        y2 = y1 + c * sin(60);
        x3 = 0;
        y3 = a;

        for (let i = 0; i < 6; i++) {
            push();
                rotate(i * 60);
                translate(0, -d);
                beginShape();
                vertex(x0, -y0);
                vertex(x1, -y1);
                vertex(x2, -y2);
                vertex(x3, -y3);
                endShape();
                //mirrored on y axis
                beginShape();
                vertex(-x0, -y0);
                vertex(-x1, -y1);
                vertex(-x2, -y2);
                vertex(-x3, -y3);
                endShape();
            pop();
        }
    pop();
}