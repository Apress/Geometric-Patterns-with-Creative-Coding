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
        let x0, y0, x1, y1, x2, y2;
        let b = this.a * (sin(45) / sin(22.5));
        let dx = this.a + b * cos(67.5);
        let dy = dx;

        for (let k = 0; k < 4; k++) {
            push();
                //mirroring
                switch (k) {
                    case 0:
                        scale(1, 1);
                        break;
                    case 1:
                        scale(1, -1);
                        break;
                    case 2:
                        scale(-1, -1);
                        break;
                    case 3:
                        scale(-1, 1);
                        break;
                    default:
                    //
                }
                translate(dx, -dy);
                //quarter shape
                for (let i = 0; i < 4; i++) {
                    rotate(i * 90);
                    beginShape();
                    x0 = 0;
                    y0 = 0;
                    x1 = a;
                    y1 = 0;
                    x2 = a + b * cos(67.5);
                    y2 = b * sin(67.5);
                    vertex(x0, -y0);
                    vertex(x1, -y1);
                    vertex(x2, -y2);
                    endShape();
                }
            pop();
        }
    }
}

//scale factor
let a = 20;
let motif = new Motif(a);
let xOff, yOff;
let nRow;
let nCol;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noLoop();
    noFill();

    let b = a * (sin(45) / sin(22.5));
    xOff = 4 * (a + b * cos(67.5));
    yOff = xOff;

    //approximate the nRow and nCol values
    nRow = 1 + ceil(height / xOff);
    nCol = 1 + ceil(width / yOff);
}

function draw() {
    push();
        for (let r = 0; r < nRow; r++) {
            for (let c = 0; c < nCol; c++) {
                push();
                    translate(xOff * c, yOff * r);
                    motif.display();
                pop();
            }
        }
    pop();
}
