/*
Code written by Selcuk ARTUT 2022
Geometric Patterns with Creative Coding 
All rights reserved
*/

//scale factor
let a = 180;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noFill();
    noLoop();
}
function draw() {
    let x, y;
    push();
        translate(width * 0.5, height * 0.5);
        for (let i = 0; i < 6; i++) {
            push();
                rotate(60 * i);
                translate(cos(30) * a * 0.5, -sin(30) * a * 0.5);
                arc(0, 0, a, a, 30, 150);
            pop();
        }
    pop();
}
