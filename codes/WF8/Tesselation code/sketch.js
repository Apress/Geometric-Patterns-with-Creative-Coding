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
        let x0, y0, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5;
        x0 = a * cos(60);
        y0 = -a * sin(60);
        x1 = x0 + 4 * a;
        y1 = y0;
        x2 = 4 * a;
        y2 = 0;
        x3 = a;
        y3 = 0;
        x4 = x3 + 4 * a * cos(60);
        y4 = -4 * a * sin(60);
        x5 = x4 - a;
        y5 = y4;
        for (let i = 0; i < 6; i++) {
            push();
                rotate(60 * i);
                beginShape();
                vertex(x0, y0);
                vertex(x1, y1);
                vertex(x2, y2);
                endShape();
                beginShape();
                vertex(x3, y3);
                vertex(x4, y4);
                vertex(x5, y5);
                endShape();
            pop();
        }

        //hexagon
        //needs to be rotated 90 degrees to adjust the orientation
        rotate(90);
        let angle = 360 / 6;
        beginShape();
        for (let ang = 0; ang < 360; ang += angle) {
            let sx = cos(ang) * 3 * a;
            let sy = sin(ang) * 3 * a;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }
}


//scale factor
let a = 16; 
let motif = new Motif(a);
let nRow;
let nCol;
let dx, dy, doff;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noFill();
    noLoop();

    dy = 2 * 5 * a * sin(60);
    dx = dy * sin(60);
    doff = dy * 0.5;

    //approximate the nRow and nCol values
    nRow = 1 + ceil(height / dy);
    nCol = 1 + ceil(width / dx);
}

function draw() {
    for (let c = 0; c < nCol; c++) {
        for (let r = 0; r < nRow; r++) {
            push();
                if (c % 2 == 1) {
                    //columns 1,3,5,7
                    translate(0, doff);
                }
                translate(dx * c, dy * r);
                motif.display();
            pop();
        }
    }
}
