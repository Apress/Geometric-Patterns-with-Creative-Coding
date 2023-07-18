/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

// Motif class
class Motif {
    constructor(a) {
        this.radius = a;
    }

    display() {
        for (let i = 0; i < 6; i++) {
            push();
                rotate(60 * i);
                translate(cos(30) * this.radius, -sin(30) * this.radius);
                arc(0, 0, this.radius * 2, this.radius * 2, 30, 150);
            pop();
        }
    }
}

//scale factor
let radius = 20;
let motif = new Motif(radius);
let nRow;
let nCol;
let dx, dy, doff;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noLoop();
    noFill();

    dx = 4 * radius * cos(30);
    dy = 3 * radius;
    doff = 0.5 * dx;
    
    //approximate the nRow and nCol values
    nRow = ceil(height / dy);
    nCol = ceil(width / dx);
}

function draw() {
    for (let r = 0; r < nRow; r++) {
        for (let c = 0; c < nCol; c++) {
            push();
                translate(c * dx, r * dy);
                if (r % 2) {
                    //rows 0,2,4,6
                    translate(doff, 0);
                }
                motif.display();
            pop();
        }
    }
}
