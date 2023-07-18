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
        let b = (a * sin(120)) / sin(45);
        let c = (a * sin(15)) / sin(45);
        let d = (c * sin(90)) / sin(30);
        let e = (d * sin(60)) / sin(90);
        let f = (e + c) * sin(45);
        let h = ((b + f) * sin(30)) / sin(60) - f;

        let x0, y0, x1, y1, x2, y2, x3, y3;
        x0 = 0;
        y0 = 0;
        x1 = (2 * c + e) * cos(30);
        y1 = (2 * c + e) * sin(30);
        x2 = x1 + h * cos(15);
        y2 = y1 - h * sin(15);
        x3 = x1 + (c + h - 1) * cos(15);
        y3 = y1 - (c + h - 1) * sin(15);

        for (let i = 0; i < 12; i++) {
            push();
                rotate(45);
                rotate(i * 30);
                translate(0, -a);
                //every two step mirrored on the y-axis
                if (i % 2 == 0) scale(-1, 1);
                beginShape();
                vertex(-x0, -y0);
                vertex(-x1, -y1);
                vertex(-x2, -y2);
                endShape();
                beginShape();
                vertex(x0, -y0);
                vertex(x1, -y1);
                vertex(x3, -y3);
                endShape();
            pop();
        }
    }
}

//scale factor
let a = 32;

let motif = new Motif(a);
let nRow;
let nCol;
let dx, dy;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noFill();
    noLoop();
    let b = (a * sin(120)) / sin(45);
    let c = (a * sin(15)) / sin(45);
    let d = (c * sin(90)) / sin(30);
    let e = (d * sin(60)) / sin(90);
    let f = (e + c) * sin(45);
    let h = ((b + f) * sin(30)) / sin(60) - f;
    let k = (b + f) / sin(60);

    dx = 2 * k;
    dy = 2 * k * sin(60);
    
    //approximate the nRow and nCol values
    nRow = 1 + ceil(height / dy);
    nCol = 1 + ceil(width / dx);
}

function draw() {
    for (let r = 0; r < nRow; r++) {
        for (let c = 0; c < nCol; c++) {
            push();
                if (r % 2 == 1) {
                    translate(dx * 0.5, 0);
                }
                translate(dx * c, dy * r);
                motif.display();
            pop();
        }
    }
}
