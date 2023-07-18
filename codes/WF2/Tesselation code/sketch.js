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
        let b = 2 * this.a * cos(30);
        beginShape();
        for (let i = 0; i < 12; i++) {
            let x, y;
            if (i % 2 == 0) {
                x = this.a * cos(30 * i);
                y = this.a * sin(30 * i);
            } else {
                x = b * cos(30 * i);
                y = b * sin(30 * i);
            }
            vertex(x, y);
        }
        endShape(CLOSE);
    }
}

//scale factor
let a = 40;
let motif = new Motif(a);
let nRow;
let nCol;
let dx, dy;
let doff;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noFill();
    noLoop();

    dx = 3 * a;
    dy = 4 * a * cos(30);
    doff = dy * 0.5;

    //approximate the nRow and nCol values
    nRow = ceil(height / dy);
    nCol = ceil(width / dx);
}

function draw() {
    for (let c = 0; c < nCol; c++) {
        for (let r = 0; r < nRow; r++) {
            push();
                translate(dx * c, dy * r);
                if (c % 2 == 0) {
                    //columns 0,2,4
                    translate(0, doff);
                }
                motif.display();
            pop();
        }
    }
}
