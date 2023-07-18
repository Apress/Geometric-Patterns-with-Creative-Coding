let a,b;
function setup() {
createCanvas(400, 400);
angleMode(DEGREES);
noFill();
a = 40;
b = a * (sin(45) / sin(22.5));
}
function draw() {
noFill();
let x0,y0,x1,y1,x2,y2;
push();
translate(width*0.5,height*0.5);
for(let i=0;i<4;i++){
rotate(i*90);
beginShape();
x0 = 0;
y0 = 0;
x1 = a;
y1 = 0;
x2 = a + b * cos(67.5);
y2 = b * sin(67.5);
vertex(x0,-y0);
vertex(x1,-y1);
vertex(x2,-y2);
endShape();
}
pop();
}