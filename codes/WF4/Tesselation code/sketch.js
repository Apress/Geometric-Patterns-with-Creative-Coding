/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

// Motif class
class Motif {
    constructor(r) {
        this.a = r; //inner Radius
        this.b = r * (sin(135) / sin(15)); //outer Radius
    }

    display() {
        let angle = 30;
        beginShape();
        for (let i = 0; i < 12; i++) {
            let sx, sy;
            if (i % 2 == 0) {
                sx = cos(i * angle) * this.b;
                sy = sin(i * angle) * this.b;
            } else {
                sx = cos(i * angle) * this.a;
                sy = sin(i * angle) * this.a;
            }
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }
}

let a = 16; //inner Radius, scale factor
let b; //outer Radius
let dx, dy;
let nRow;
let nCol;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noFill();
    noLoop();
    b = a * (sin(135) / sin(15));
    dx = 2 * b;
    dy = 2 * b * cos(30);
    //approximate the nRow and nCol values
    nRow = ceil(height / dy);
    nCol = ceil(width / dx);
}

function draw() {
    let motif = new Motif(a);
    for (let r = 0; r < nRow; r++) {
        for (let c = 0; c < nCol; c++) {
            push();
                if (r % 2 == 0) {
                    //rows 0,2,4,6
                    translate(c * dx, r * dy);
                } else {
                    //rows 1,3,5,7
                    translate(c * dx + b, r * dy);
                }
                motif.display();
            pop();
        }
    }
}
