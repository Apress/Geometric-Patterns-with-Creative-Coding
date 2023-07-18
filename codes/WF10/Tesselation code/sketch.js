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
        let b = (this.a * sin(112.5)) / sin(22.5);
        let c = this.a * 6;
        let d = (this.a * sin(45)) / sin(22.5);
        let e = ((c - b) * sin(22.5)) / sin(45);

        let x0, y0, x1, y1, x2, y2, x3, y3, x4, y4;
        rotate(45);
        for (let n = 0; n < 4; n++) {
            push();
                rotate(90 * n);
                beginShape();
                x0 = 0;
                y0 = -this.a;
                vertex(x0, y0);
                x1 = b * cos(45);
                y1 = -b * sin(45);
                vertex(x1, y1);
                x2 = (d + (c - b) * cos(22.5)) * cos(67.5) + this.a;
                y2 = -1 * ((d + (c - b) * cos(22.5)) * sin(67.5));
                vertex(x2, y2);
                x3 = 0;
                y3 = -c;
                vertex(x3, y3);
                x4 = e * cos(22.5);
                y4 = -1 * (e * sin(22.5) + c);
                vertex(x4, y4);
                endShape();
                //mirroring
                push();
                    scale(-1, 1);
                    beginShape();
                    x0 = 0;
                    y0 = -this.a;
                    vertex(x0, y0);
                    x1 = b * cos(45);
                    y1 = -b * sin(45);
                    vertex(x1, y1);
                    x2 = (d + (c - b) * cos(22.5)) * cos(67.5) + this.a;
                    y2 = -1 * ((d + (c - b) * cos(22.5)) * sin(67.5));
                    vertex(x2, y2);
                    x3 = 0;
                    y3 = -c;
                    vertex(x3, y3);
                    x4 = e * cos(22.5);
                    y4 = -1 * (e * sin(22.5) + c);
                    vertex(x4, y4);
                    endShape();
                pop();
            pop();
        }
    }
}

//scale factor
let a = 20;
let c;
let motif = new Motif(a);
let nRow;
let nCol;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noLoop();
    noFill();

    c = 6 * a;

    //approximate the nRow and nCol values
    nRow = ceil(height / (2 * c));
    nCol = ceil(width / (2 * c));
}
function draw() {
    for (let r = 0; r < nRow; r++) {
        for (let k = 0; k < nCol; k++) {
            push();
                translate(k * c * 2, c * r * 2);
                motif.display();
            pop();
        }
    }
}
