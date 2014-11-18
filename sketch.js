var dir1=1;

function setup() {
   createCanvas(1500, 1650);
   background(0);

}

function draw (){
     background(0);
     drawSnow();
}


function drawSnow(){
    var r=Math.random();
    stroke(255,255,255,128);
    strokeWeight(20);

    fill(255);
    ellipse(700,dir1,50,50);
    ellipse(100,dir1+500,20,20);
    ellipse(200,dir1+r,30,30);
    ellipse(300,dir1+800,25,25);
    ellipse(400,dir1+100,20,20);
    ellipse(500,dir1+350,34,34);
    ellipse(600,dir1+270,47,47);
    ellipse(800,dir1+900,25,25);
    ellipse(900,dir1+670,34,34);
    ellipse(1000,dir1+230,17,17);
    ellipse(1100,dir1+590,28,28);
    ellipse(1200,dir1+312,33,33);
    ellipse(1300,dir1+100,50,50);
    ellipse(1400,dir1+400,27,27);
    ellipse(1500,dir1+777,35,35);
    dir1=dir1+1;     
    if(dir1>100){
     dir1=-100;
 }

}