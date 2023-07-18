/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/


//scale factor
let a = 32;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noFill();
    noLoop();
}

function draw() {
    push();
        translate(width * 0.5, height * 0.5);
        let c, d, e;
        c = (a * sin(18)) / sin(54);
        d = (c * sin(72)) / sin(36);
        e = ((d + d) * sin(108)) / sin(36);

        let x0,y0,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,x9,y9;
        x0 = 0;
        y0 = 0;
        x1 = (d + d) * cos(54);
        y1 = (d + d) * sin(54);
        x2 = 0;
        y2 = e;
        x3 = d * cos(54);
        y3 = y2 + d * sin(54);
        x4 = x3 + (d + c) * cos(18);
        y4 = y3 - (d + c) * sin(18);
        x5 = 0;
        y5 = e - d;
        x6 = (c + d) * cos(18);
        y6 = y5 + (c + d) * sin(18);
        x7 = x6;
        y7 = y6 + (c + d);
        x8 = 0;
        y8 = d;
        x9 = (c + d * 0.5) * cos(18);
        y9 = y8 - (c + d * 0.5) * sin(18);

        push();
            for (let n = -1; n < 2; n += 2) {
                push();
                    scale(1, n);
                    for (let m = -1; m < 2; m += 2) {
                        push();
                        scale(m, 1);
                        beginShape();
                        vertex(x0, -y0);
                        vertex(x1, -y1);
                        vertex(x2, -y2);
                        vertex(x3, -y3);
                        vertex(x4, -y4);
                        endShape();
                        beginShape();
                        vertex(x5, -y5);
                        vertex(x6, -y6);
                        vertex(x7, -y7);
                        endShape();
                        beginShape();
                        vertex(x8, -y8);
                        vertex(x9, -y9);
                        endShape();
                        pop();
                    }
                pop();
            }
        pop();
    pop();
}
