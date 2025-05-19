let player; // 360 | 455
let jumpForce = 0;
let ground; 
let movement = 0;
let platform;
function setup(){
    createCanvas(720, 480);
 player = createVector(width / 2, height - 50);
 platform = createVector(300, 150);
ground = height - 50;
}
function draw(){
background('SkyBlue');
rectMode(CENTER);
rect(player.x, player.y, 50, 50);
rect(platform.x, platform.y, 100, 150);
player.y += jumpForce;
player.x += movement;  
jumpForce += 0.5;

if (player.y >= ground){
    jumpForce = 0;

}else {
    jumpForce += 0.5;
}
if (keyIsDown(RIGHT_ARROW)){
    movement = 5;
}else if(keyIsDown(LEFT_ARROW)){
    movement = -5;
}else{
    movement = 0;
}

if (keyIsDown(32) && player.y >= ground){
    jumpForce = -12; 
}
}