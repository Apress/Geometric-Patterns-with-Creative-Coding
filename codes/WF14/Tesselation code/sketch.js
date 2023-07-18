/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//Motif class
class Motif {
    constructor(a) {
        this.a = a;
    }

    display() {
        let x0, y0, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5;
        let dx = this.a * cos(30);
        let dy = this.a * sin(30);
        for (let i = 0; i < 6; i++) {
            push();
                rotate(60 * i);
                translate(dx, dy);
                beginShape();
                x0 = 0;
                y0 = 0;
                x1 = this.a * cos(30);
                y1 = this.a * sin(30);
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
                y4 = y3 + this.a;
                x5 = x1;
                y5 = y1 + this.a;
                vertex(x1, -y1);
                vertex(x3, -y3);
                vertex(x4, -y4);
                if (i >= 3) {
                    vertex(x5, -y5);
                }
                endShape();
            pop();
        }
    }
}

//scale factor
let a = 20;
let motif = new Motif(a);
let nRow;
let nCol;
let dx, dy, doff;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noFill();
    noLoop();

    dx = 5 * a * cos(30);
    dy = 5 * a;
    doff = dy * 0.5;

    //approximate the nRow and nCol values
    nRow = 1 + ceil(height / dy);
    nCol = 1 + ceil(width / dx);
}

function draw() {
    push();
        for (let c = 0; c < nCol; c++) {
            for (let r = 0; r < nRow; r++) {
                push();
                    translate(dx * c, dy * r);
                    if (c % 2 == 1) {
                        translate(0, doff);
                    }
                    motif.display();
                pop();
            }
        }
    pop();
}
