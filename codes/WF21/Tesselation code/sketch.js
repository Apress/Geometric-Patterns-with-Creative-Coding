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
        let a, b, c, d, e, f, g, h, j, k, m, n;
        a = this.a;
        c = (a * sin(144)) / sin(18);
        b = (a * sin(36)) / sin(126);
        d = (a * sin(36)) / sin(108);
        e = (d * sin(36)) / sin(72);
        f = ((2 * d + e) * sin(36)) / sin(108);
        g = 3 * d + e + f;
        h = (2 * d + e + f) / 3;
        j = (h * sin(108)) / sin(36);
        k = 2 * d + e + d + a + a;
        m = ((2 * d + e) * 0.5 * sin(108)) / sin(36);
        n = (2 * d + e) * 0.5;

        //Shape 1
        push();
            rotate(18);
            beginShape();
            for (let i = 0; i < 10; i++) {
                let x = a * cos(i * 36);
                let y = a * sin(i * 36);
                vertex(x, y);
                x = b * cos(i * 36 + 18);
                y = b * sin(i * 36 + 18);
                vertex(x, y);
            }
            endShape(CLOSE);
        pop();

        //Shape 2
        for (let i = 0; i < 10; i++) {
            push();
                rotate(i * 36);
                translate(c, 0);
                beginShape();
                let x0 = -a * cos(18);
                let y0 = a * sin(18);
                let x1 = d * cos(18);
                let y1 = -d * sin(18);
                vertex(x0, y0);
                vertex(x1, y1);
                endShape();
                //mirror on x-axis
                push();
                    scale(1, -1);
                    beginShape();
                    x0 = -a * cos(18);
                    y0 = a * sin(18);
                    x1 = d * cos(18);
                    y1 = -d * sin(18);
                    vertex(x0, y0);
                    vertex(x1, y1);
                    endShape();
                pop();
            pop();
        }

        //Shape 3
        let x0, y0, x1, y1, x2, y2;
        for (let i = 0; i < 10; i++) {
            push();
                rotate(36 * i);
                translate(0, -k);
                beginShape();
                x0 = g * cos(54);
                y0 = g * sin(54);
                x1 = 0;
                y1 = 0;
                x2 = -x0;
                y2 = y0;
                vertex(x0, y0);
                vertex(x1, y1);
                vertex(x2, y2);
                endShape();
            pop();
        }

        //Shape 4
        x0 = 0;
        y0 = 0;
        x1 = 3 * n * cos(54);
        y1 = 3 * n * sin(54);
        x2 = 0;
        y2 = 3 * n;

        //one on the top one on the bottom
        for (let i = 0; i < 2; i++) {
            push();
                rotate(i * 180);
                push();
                    translate(0, -1 * (k - m));
                    beginShape();
                    vertex(x0, -y0);
                    vertex(x1, -y1);
                    vertex(x2, -y2);
                    endShape();
                    push();
                        scale(-1, 1);
                        beginShape();
                        vertex(x0, -y0);
                        vertex(x1, -y1);
                        vertex(x2, -y2);
                        endShape();
                    pop();
                pop();
            pop();
        }
    }
}

let dx, dy, doff;
let nRow;
let nCol;
let a = 25;
let motif = new Motif(a);

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noFill();
    noLoop();

    let b, c, d, e, f, g, h, j, n, p, r;
    c = (a * sin(144)) / sin(18);
    b = (a * sin(36)) / sin(126);
    d = (a * sin(36)) / sin(108);
    e = (d * sin(36)) / sin(72);
    f = ((2 * d + e) * sin(36)) / sin(108);
    g = 3 * d + e + f;
    p = (g * sin(36)) / sin(72);
    h = p / 2;
    j = (h * sin(108)) / sin(36);
    n = (2 * d + e) * 0.5;
    p = 2 * (g + d * sin(18));
    r = 0.5 * (2 * d + e) * sin(72);

    dx = (2 * d + e + f) * cos(18) * 2 - r;
    doff = 2 * (2 * d + e + f + d + d * sin(18)) - n - n * sin(18);
    dy = 2 * doff;

    //approximate the nRow and nCol values
    nRow = 1 + ceil(height / dy);
    nCol = 1 + ceil(width / dx);
}

function draw() {
    for (let r = 0; r < nRow; r++) {
        for (let c = 0; c < nCol; c++) {
            push();
                if (c % 2 == 1) {
                    //columns 1,3,5,7
                    translate(0, doff);
                }
                translate(dx * c, dy * r);
                motif.display();
            pop();
        }
    }
}
