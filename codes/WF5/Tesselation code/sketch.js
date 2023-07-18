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
        for (let i = 0; i < 6; i++) {
            push();
                rotate(60 * i);
                translate(4 * this.a, 0);
                beginShape();
                //hexagon
                for (let k = 0; k < 6; k++) {
                    let x = 3 * this.a * cos(k * 60);
                    let y = 3 * this.a * sin(k * 60);
                    vertex(x, y);
                }
                endShape(CLOSE);
            pop();
        }
    }
}

//scale factor
let a = 18;
let motif = new Motif(a);
let nRow;
let nCol;
let dx, dy;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noFill();
    noLoop();

    dx = 12 * a;
    dy = 8 * a * sin(60);
    //approximate the nRow and nCol values
    nRow = ceil(height / dy);
    nCol = 1+ceil(width / dx);
}

function draw() {
    push();
        for (let r = 0; r < nRow; r++) {
            for (let c = 0; c < nCol; c++) {
                push();
                    translate(dx * c, dy * r);
                    motif.display();
                pop();
            }
        }
    pop();
}
