/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//Filling class
class Filling {
    constructor(a) {
        this.a = a;
    }

    display() {
        let c, d, e;
        c = (this.a * sin(18)) / sin(54);
        d = (c * sin(72)) / sin(36);
        e = ((d + d) * sin(108)) / sin(36);

        let x0,y0,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,x9,y9;
        x0 = 0;
        y0 = 0;
        x1 = (d + d) * cos(54);
        y1 = (d + d) * sin(54);
        x2 = 0;
        y2 = e;
        x3 = d * cos(54);
        y3 = y2 + d * sin(54);
        x4 = x3 + (d + c) * cos(18);
        y4 = y3 - (d + c) * sin(18);
        x5 = 0;
        y5 = e - d;
        x6 = (c + d) * cos(18);
        y6 = y5 + (c + d) * sin(18);
        x7 = x6;
        y7 = y6 + (c + d);
        x8 = 0;
        y8 = d;
        x9 = (c + d * 0.5) * cos(18);
        y9 = y8 - (c + d * 0.5) * sin(18);

        push();
            for (let n = -1; n < 2; n += 2) {
                push();
                    scale(1, n);
                    for (let m = -1; m < 2; m += 2) {
                        push();
                            scale(m, 1);
                            beginShape();
                            vertex(x0, -y0);
                            vertex(x1, -y1);
                            vertex(x2, -y2);
                            vertex(x3, -y3);
                            vertex(x4, -y4);
                            endShape();
                            beginShape();
                            vertex(x5, -y5);
                            vertex(x6, -y6);
                            vertex(x7, -y7);
                            endShape();
                            beginShape();
                            vertex(x8, -y8);
                            vertex(x9, -y9);
                            endShape();
                        pop();
                    }
                pop();
            }
        pop();
    }
}

//Motif class
class Motif {
    constructor(a) {
        this.a = a;
    }

    display() {

        let a = this.a;
        let b, c, d;

        b = (a * sin(108)) / sin(54);
        c = (a * sin(18)) / sin(54);
        d = (c * sin(72)) / sin(36);

        //Shape 1 - ten sided star
        let x, y;
        push();
            //orient correctly
            rotate(18);
            beginShape();
            for (let i = 0; i < 10; i++) {
                x = a * cos(36 * i);
                y = a * sin(36 * i);
                vertex(x, y);
                x = b * cos(18 + 36 * i);
                y = b * sin(18 + 36 * i);
                vertex(x, y);
            }
            endShape(CLOSE);
        pop();

        //Shape 2 - pentagon in a circular pattern
        let r = (3 * d * sin(54)) / sin(72);
        for (let i = 0; i < 10; i++) {
            push();
                rotate(36 * i);
                translate(-(b + r), 0);
                beginShape();
                for (let i = 0; i < 5; i++) {
                    x = r * cos(72 * i);
                    y = r * sin(72 * i);
                    vertex(x, y);
                }
                endShape(CLOSE);
            pop();
        }

        //Shape 3 - decagon
        push();
            rotate(18);
            beginShape();
            for (let i = 0; i < 10; i++) {
                let x0 = (2 * d + a) * cos(36 * i);
                let y0 = (2 * d + a) * sin(36 * i);
                vertex(x0, y0);
            }
            endShape(CLOSE);
        pop();

        //Shape 4 circular pattern with the u-type shape
        for (let i = 0; i < 10; i++) {
            push();
                rotate(i * 36);
                let e = (2 * d * sin(108)) / sin(36);
                let f = e + a;
                let g = d + c;
                translate(0, -f);
                let x0, y0, x1, y1, x2, y2, x3, y3;

                x0 = 0;
                y0 = 0;
                x1 = g * cos(18);
                y1 = g * sin(18);
                x2 = x1;
                y2 = y1 + 1.5 * d;

                beginShape();
                vertex(x0, -y0);
                vertex(x1, -y1);
                vertex(x2, -y2);
                endShape();
                //mirror
                push();
                    scale(-1, 1);
                    beginShape();
                    vertex(x0, -y0);
                    vertex(x1, -y1);
                    vertex(x2, -y2);
                    endShape();
                pop();
            pop();
        }
    }
}

//scale factor
let a = 25;
let b, c, d, p, q, r;

let motif = new Motif(a);
let filling = new Filling(a);

let dx, dy, doff;
let nRow;
let nCol;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noFill();
    noLoop();

    b = (a * sin(108)) / sin(54);
    c = (a * sin(18)) / sin(54);
    d = (c * sin(72)) / sin(36);

    p = (3 * d * sin(108)) / sin(36);
    q = p * sin(72); //penta height
    r = q / 3;

    dx = 2 * (q + b + r);
    doff = dx * 0.5;

    let e = (2 * d * sin(108)) / sin(36);
    let f = (d + c) * cos(72) + 1.5 * d;
    let g = e + a + f;

    dy = 2 * g * cos(36);

    //approximate the nRow and nCol values
    nRow = 1 + ceil(height / dy);
    nCol = 1 + ceil(width / dx);
}

function draw() {
    for (let r = 0; r < nRow; r++) {
        for (let c = 0; c < nCol; c++) {
            push();
                if (r % 2 == 1) {
                    //rows 1,3,5,7
                    translate(doff, 0);
                }
                translate(dx * c, dy * r);
                motif.display();
            pop();

            push();
                if (r % 2 == 0) {
                    //columns 1,3,5,7
                    translate(doff, 0);
                }
                translate(dx * c, dy * r);
                filling.display();
            pop();
        }
    }
}
