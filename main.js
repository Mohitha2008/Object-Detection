function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
var img="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("Dog",50,60);
    noFill();
    stroke("#ff0000");
    rect(30,40,350,370);
    fill("#ff0000");
    text("Cat",550,90);
    noFill();
    stroke("#ff0000");
    rect(300,60,280,300);
    
}