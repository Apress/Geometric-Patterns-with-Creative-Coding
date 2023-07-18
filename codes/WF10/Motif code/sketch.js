/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 25;
let b, c, d, e;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noLoop();
    noFill();
    a = 25;
    b = (a * sin(112.5)) / sin(22.5);
    c = 6 * a;
    d = (a * sin(45)) / sin(22.5);
    e = ((c - b) * sin(22.5)) / sin(45);
}

function draw() {
    let x0, y0, x1, y1, x2, y2, x3, y3, x4, y4;
    push();
        translate(width * 0.5, height * 0.5);
        rotate(45);
        for (let n = 0; n < 4; n++) {
            push();
                rotate(90 * n);
                beginShape();
                x0 = 0;
                y0 = -a;
                vertex(x0, y0);
                x1 = b * cos(45);
                y1 = -b * sin(45);
                vertex(x1, y1);
                x2 = (d + (c - b) * cos(22.5)) * cos(67.5) + a;
                y2 = -1 * ((d + (c - b) * cos(22.5)) * sin(67.5));
                vertex(x2, y2);
                x3 = 0;
                y3 = -c;
                vertex(x3, y3);
                x4 = e * cos(22.5);
                y4 = -1 * (e * sin(22.5) + c);
                vertex(x4, y4);
                endShape();
                //mirroring
                push();
                    scale(-1, 1);
                    beginShape();
                    x0 = 0;
                    y0 = -a;
                    vertex(x0, y0);
                    x1 = b * cos(45);
                    y1 = -b * sin(45);
                    vertex(x1, y1);
                    x2 = (d + (c - b) * cos(22.5)) * cos(67.5) + a;
                    y2 = -1 * ((d + (c - b) * cos(22.5)) * sin(67.5));
                    vertex(x2, y2);
                    x3 = 0;
                    y3 = -c;
                    vertex(x3, y3);
                    x4 = e * cos(22.5);
                    y4 = -1 * (e * sin(22.5) + c);
                    vertex(x4, y4);
                    endShape(); 
                pop();
            pop();
        }
    pop();
}
