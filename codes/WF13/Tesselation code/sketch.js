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
        let x0, y0, x1, y1, x2, y2, x3, y3;
        x0 = 0;
        y0 = this.a * sin(60);
        x1 = this.a * cos(60);
        y1 = 0;
        x2 = x1 + this.a;
        y2 = 0;
        x3 = 0;
        y3 = 3 * this.a * sin(60);

        for (let i = 0; i < 6; i++) {
            push();
                rotate(i * 60);
                push();
                    translate(2 * this.a + this.a * cos(60), 2 * this.a * sin(60));
                    beginShape();
                    vertex(x0, -y0);
                    vertex(x1, -y1);
                    vertex(x2, -y2);
                    vertex(x3, -y3);
                    endShape();
                    //mirror on y-axis
                    push();
                        scale(-1, 1);
                        beginShape();
                        vertex(x0, -y0);
                        vertex(x1, -y1);
                        vertex(x2, -y2);
                        vertex(x3, -y3);
                        endShape();
                    pop();
                pop();
            pop();
        }
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

    //even columns 0,2,4,...
    //odd columna 1,3,5,...
    dx = 6 * a;
    dy = 6 * a * sin(60);
    doff = dx * 0.5;

    //approximate the nRow and nCol values
    nCol = 1 + ceil(width / dx);
    nRow = 1 + ceil(height / dy);
}

function draw() {
    for (let c = 0; c < nCol; c++) {
        for (let r = 0; r < nRow; r++) {
            push();
                if (r % 2 == 0) {
                    //columns 0,2,4,6
                    translate(doff, 0);
                }
                translate(dx * c, dy * r);
                motif.display();
            pop();
        }
    }
}
