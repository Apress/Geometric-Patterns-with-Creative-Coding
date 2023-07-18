/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 60;
let b, c, d, e;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noLoop();
    noFill();
    c = a * cos(22.5);
    b = a * (sin(22.5) / sin(112.5));
    e = a / (3 * cos(45) + 2);
    d = e * cos(45);
}
function draw() {
    let x0, y0, x1, y1, x2, y2;
    x0 = (a + b) * cos(22.5);
    y0 = (a + b) * sin(22.5);
    x1 = a * cos(22.5);
    y1 = a * sin(22.5);
    x2 = (a - (e + d)) * cos(22.5);
    y2 = (a - (e + d)) * sin(22.5);
    push();
        translate(width * 0.5, height * 0.5);
        for (let i = 0; i < 8; i++) {
            push();
                rotate(i * 45);
                translate(2 * c, 0);
                let mirror = 1;
                for (let m = 0; m < 2; m++) {
                    push();
                        //reflect on x axis
                        scale(1, mirror);
                        beginShape();
                        vertex(-x0, -y0);
                        //segments2,4,6,8
                        if (i % 2 == 1) {
                            vertex(x2, y2);
                        } else {
                            vertex(x1, y1);
                        }
                        endShape();
                        mirror = -1;
                    pop();
                }
            pop();
        }
    pop();
}
