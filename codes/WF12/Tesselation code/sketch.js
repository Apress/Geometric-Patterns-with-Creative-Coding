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
        let a = this.a;
        let b = a * cos(45);
        let c = b * tan(30);
        let d = 2 * b * sin(60) - c + 0.5 * a * (sin(45) / sin(30));

        let x0, y0, x1, y1, x2, y2;
        x0 = -b;
        y0 = 0;
        x1 = 0;
        y1 = b;
        x2 = -x0;
        y2 = 0;

        rotate(90);
        for (let k = 0; k < 6; k++) {
            push();
                rotate(k * 60);
                translate(0, d);
                rotate(60);
                for (let i = 0; i < 3; i++) {
                    push();
                        rotate(120 * i);
                        translate(0, -c);
                        beginShape();
                        vertex(x0, -y0);
                        vertex(x1, -y1);
                        vertex(x2, -y2);
                        endShape();
                    pop();
                }
            pop();
        }
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
    noLoop();
    noFill();
    let b = a * cos(45);
    let c = b * tan(30);
    let d = b + 2 * b * sin(60);
    let e = 0.5 * a * (sin(45) / sin(30));
    let f = e * (sin(105) / sin(45));

    dx = 2 * e + 2 * d - 0.5 * a * (1 / cos(45));
    dy = 3 * f + 1.5 * (0.5 * a * (1 / cos(45)));
    doff = dx / 2;

    //approximate the nRow and nCol values
    nRow = ceil(height / dy);
    nCol = 1 + ceil(width / dx);
}

function draw() {
    push();
        for (let r = 0; r < nRow; r++) {
            for (let c = 0; c < nCol; c++) {
                push();
                    if (r % 2 == 1) {
                        //row 1,3,5,7
                        translate(-doff, 0);
                    }
                    translate(dx * c, dy * r);
                    motif.display();
                pop();
            }
        }
    pop();
}
