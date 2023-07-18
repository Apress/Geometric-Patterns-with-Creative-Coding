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
        let b = this.a * (sin(135) / sin(30));
        let c = this.a * (sin(15) / sin(30));
        let d = c * (sin(75) / sin(60));
        let e = d * (sin(45) / sin(75));
        let f = e * (sin(60) / sin(90));

        let x0,y0,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8;

        //Shape 1 vertices
        x0 = 0;
        y0 = 0;
        x1 = 0;
        y1 = this.a;
        x2 = b * cos(75);
        y2 = b * sin(75);
        x3 = this.a * cos(60);
        y3 = this.a * sin(60);
        x4 = this.a * cos(60);
        y4 = this.a * sin(60);

        //Shape 1
        for (let i = 0; i < 12; i++) {
            push();
                rotate(30 * i);
                beginShape();
                vertex(x0, -y0);
                vertex(x1, -y1);
                vertex(x2, -y2);
                vertex(x3, -y3);
                endShape(CLOSE);
            pop();
        }

        //Shape 2 vertices
        x0 = 0;
        y0 = this.a;
        x1 = 0;
        y1 = this.a + d;
        x2 = (b + c) * cos(75);
        y2 = (b + c) * sin(75);
        x3 = b * cos(75);
        y3 = b * sin(75);

        //Shape 2
        for (let i = 0; i < 12; i++) {
            //right section
            push();
                rotate(30 * i);
                beginShape();
                vertex(x0, -y0);
                vertex(x1, -y1);
                vertex(x2, -y2);
                vertex(x3, -y3);
                endShape(CLOSE);
                //left section
                scale(-1, 1);
                beginShape();
                vertex(x0, -y0);
                vertex(x1, -y1);
                vertex(x2, -y2);
                vertex(x3, -y3);
                endShape(CLOSE);
            pop();
        }

        //Shape 3 vertices
        x0 = 0;
        y0 = this.a + d;
        x1 = (b + c) * cos(75);
        y1 = (b + c) * sin(75);
        x2 = (this.a + d) * cos(60);
        y2 = (this.a + d) * sin(60);
        x3 = (this.a + d + e + f) * cos(60);
        y3 = (this.a + d + e + f) * sin(60);
        x4 = (this.a + d + e) * cos(60);
        y4 = (this.a + d + e) * sin(60) + e;
        x5 = (b + 2 * c) * cos(75);
        y5 = (b + 2 * c) * sin(75);
        x6 = e * cos(60);
        y6 = y5;
        x7 = 0;
        y7 = this.a + d + e + 2 * f;
        x8 = 0;
        y8 = this.a + d + e;

        //Shape 3
        for (let i = 0; i < 6; i++) {
            //right section
            push();
                rotate(60 * i);
                beginShape();
                vertex(x0, -y0);
                vertex(x1, -y1);
                vertex(x2, -y2);
                vertex(x3, -y3);
                vertex(x5, -y5);
                vertex(x6, -y6);
                vertex(x7, -y7);
                endShape();
                beginShape();
                vertex(x0, -y0);
                vertex(x4, -y4);
                endShape();
                beginShape();
                vertex(x2, -y2);
                vertex(x6, -y6);
                vertex(x8, -y8);
                vertex(x0, -y0);
                endShape();
                //left section
                scale(-1, 1);
                beginShape();
                vertex(x0, -y0);
                vertex(x1, -y1);
                vertex(x2, -y2);
                vertex(x3, -y3);
                vertex(x5, -y5);
                vertex(x6, -y6);
                vertex(x7, -y7);
                endShape();
                beginShape();
                vertex(x0, -y0);
                vertex(x4, -y4);
                endShape();
                beginShape();
                vertex(x2, -y2);
                vertex(x6, -y6);
                vertex(x8, -y8);
                vertex(x0, -y0);
                endShape();
            pop();
        }
    }
}

//scale factor
let a = 40;
let motif = new Motif(a);
let nRow;
let nCol;
let dx, dy, doff;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noFill();
    noLoop();

    let b = a * (sin(135) / sin(30));
    let c = a * (sin(15) / sin(30));
    let d = c * (sin(75) / sin(60));
    let e = d * (sin(45) / sin(75));
    let f = e * (sin(60) / sin(90));

    dx = 2 * (a + d + e + f);
    dy = 2 * (a + d + e + f) * cos(30);
    doff = a + d + e + f;

    //approximate the nRow and nCol values
    nRow = 1 + ceil(height / dy);
    nCol = ceil(width / dx);
}

function draw() {
    for (let c = 0; c < nCol; c++) {
        for (let r = 0; r < nRow; r++) {
            push();
                translate(dx * c, dy * r);
                if (r % 2 == 1) {
                    translate(doff, 0);
                }
                motif.display();
            pop();
        }
    }
}
