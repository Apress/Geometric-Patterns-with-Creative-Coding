/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 25;
function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noLoop();
    noFill();
}

function draw() {
    push();
        translate(width * 0.5, height * 0.5);
        let b = (a * sin(60)) / sin(30);
        let c = 0.5 * a;

        let x0, y0, x1, y1, x2, y2, x3, y3;
        x0 = 0;
        y0 = a + b;
        x1 = (a + 2 * b + c) * cos(30);
        y1 = (a + 2 * b + c) * sin(30) + y0;
        x2 = 0;
        y2 = a + b;
        x3 = 2 * (a + b) * cos(30);
        y3 = 2 * (a + b) * sin(30) + y2;

        for (let i = 0; i < 12; i++) {
            push();
                rotate(30 * i);
                if (i % 3 == 0) {
                    //0,4,8,12
                    //shape1
                    beginShape();
                    vertex(x0, -y0);
                    vertex(x1, -y1);
                    endShape();
                    push();
                        scale(-1, 1);
                        beginShape();
                        vertex(x0, -y0);
                        vertex(x1, -y1);
                        endShape();
                    pop();
                } else {
                    //shape2
                    beginShape();
                    vertex(x2, -y2);
                    vertex(x3, -y3);
                    endShape();
                    push();
                        scale(-1, 1);
                        beginShape();
                        vertex(x2, -y2);
                        vertex(x3, -y3);
                        endShape();
                    pop();
                }
            pop();
        }
    pop();
}
