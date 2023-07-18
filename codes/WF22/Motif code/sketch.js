//scale factor
let a = 32;
let b,c,d;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noFill();
    noLoop();
    b = a * sin(108)/sin(54);
    c = a * sin(18) / sin(54);
    d = c * sin(72) / sin(36);
}

function draw() {
    push();
        translate(width*0.5,height*0.5);
        
        //Shape 1 - ten sided star
        let x,y;
        push();
            //orient correctly
            rotate(18);
            beginShape();
            for(let i = 0 ; i < 10; i++){
                x = a * cos(36*i);
                y = a * sin(36*i);
                vertex(x,y);
                x = b * cos(18+36*i);
                y = b * sin(18+36*i);
                vertex(x,y);
            }
            endShape(CLOSE);
        pop();
        
        //Shape 2 - pentagon in a circular pattern
        let r = 3*d * sin(54)/sin(72);
        for(let i = 0 ; i < 10; i++){
        push();
            rotate(36*i);
            translate(-(b+r),0); 
            beginShape();
            for(let i = 0 ; i < 5; i++){
                x = r * cos(72*i);
                y = r * sin(72*i);
                vertex(x,y);
            }
            endShape(CLOSE);
        pop();
        }
        
        //Shape 3 - decagon
        push();
            rotate(18);
            beginShape();
            for(let i = 0 ; i < 10; i++){
                let x0 = (2*d+a) * cos(36*i);
                let y0 = (2*d+a) * sin(36*i);
                vertex(x0,y0);
            }
            endShape(CLOSE);
        pop();
        
        //Shape 4 circular pattern with the u-type shape
        for(let i = 0 ; i < 10; i++){
            push();
                rotate(i*36);
                let e = 2*d*sin(108)/sin(36);
                let f = e+a;
                let g = d+c;
                translate(0,-f);
                let x0,y0,x1,y1,x2,y2,x3,y3;

                x0 = 0;
                y0 = 0;
                x1 = g*cos(18); 
                y1 = g*sin(18);
                x2 = x1;
                y2 = y1+1.5*d;

                beginShape();
                vertex(x0,-y0);
                vertex(x1,-y1);
                vertex(x2,-y2);
                endShape();
                //mirror
                push();
                    scale(-1,1);
                    beginShape();
                    vertex(x0,-y0);
                    vertex(x1,-y1);
                    vertex(x2,-y2);
                    endShape();
                pop();
            pop();
        }
    pop();
}