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
        push();
            rotate(22.5);
            let b = this.a * (sin(45) / sin(112.5));
            beginShape();
            for (let i = 0; i < 8; i++) {
                let sx = cos(i * 45) * b;
                let sy = sin(i * 45) * b;
                vertex(sx, sy);
                sx = this.a * cos(i * 45 + 45 * 0.5);
                sy = this.a * sin(i * 45 + 45 * 0.5);
                vertex(sx, sy);
            }
            endShape(CLOSE);
        pop();
    }
}

//scale factor
let a = 60;
let motif = new Motif(a);
let nRow;
let nCol;
let dx, dy;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noFill();
    noLoop();

    let b = a * (sin(45) / sin(112.5));

    dx = 2 * a;
    dy = dx;

    //approximate the nRow and nCol values
    nRow = ceil(height / dy);
    nCol = ceil(width / dx);
}

function draw() {
    for (let c = 0; c < nCol; c++) {
        for (let r = 0; r < nRow; r++) {
            push();
                translate(c * dx, r * dy);
                motif.display();
            pop();
        }
    }
}
