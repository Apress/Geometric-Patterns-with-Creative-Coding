/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

// Motif class
class Motif {
    constructor(a) {
        this.a = a;
    }

    display() {
        let b = (a * sin(60)) / sin(30);
        let c = a * 0.5 - 0.715; //0.715 pixel based adjustment
        let x0, y0, x1, y1, x2, y2, x3, y3;
        x0 = 0;
        y0 = this.a + b;
        x1 = (this.a + 2 * b + c) * cos(30);
        y1 = (this.a + 2 * b + c) * sin(30) + y0;
        x2 = 0;
        y2 = this.a + b;
        x3 = 2 * (this.a + b) * cos(30);
        y3 = 2 * (this.a + b) * sin(30) + y2;

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
    }
}

//scale factor
let a = 20;
let motif = new Motif(a);
let nRow;
let nCol;
let xoffset, yoffset;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noFill();
    noLoop();

    let b = (a * sin(60)) / sin(30);

    xoffset = 2 * (a + b) + 2 * sqrt(a * a + b * b);
    yoffset = xoffset;

    //approximate the nRow and nCol values
    nRow = ceil(width / xoffset);
    nCol = ceil(height / yoffset);
}

function draw() {
    for (let c = 0; c < nCol; c++) {
        for (let r = 0; r < nRow; r++) {
            push();
                translate(xoffset * c, yoffset * r);
                motif.display();
            pop();
        }
    }
}
