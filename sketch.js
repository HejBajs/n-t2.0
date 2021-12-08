let fallings = [];
let player;
var start, current;
var score = 0;
let buttons;

function setup() {
    createCanvas(windowWidth, windowHeight);
    buttons = new Buttons();
    fallings.push(new Falling());
    player = new Player();
}   

function draw() {
    background(20, 20, 20);
    
    for(var i = 0; i < fallings.length; i++){
        fallings[i].update();
        if(collide(player.x, player.y, player.sizeX, player.sizeY, fallings[i].x, fallings[i].y)){
            fallings[i] = new Falling();
            if(fallings[i].special==true){
                score+=(buttons.plus*100);
            }else{
                score+=buttons.plus;
            }
        }
        if(fallings[i].y > (windowHeight+50)){
            fallings[i] = new Falling();
        }
    }
    player.update();
    buttons.update();
    fill(255);
    textSize(50);
    text("$"+score, width/2, 60);
}

function collide(x, y, w, h, x2, y2){
    if(x2 > x && x2 < x+w && y2 > y && y2 < y + h){
        return true; 
    } else {
        return false; 
    }
}

function mousePressed(){
    if(isMouseInside(10, 10, 140, 50)){
        if(score >= buttons.cost1){
            score -= buttons.cost1;
            buttons.cost1+=int(buttons.cost1/4);;
            fallings.push(new Falling());
        }
    }
    if(isMouseInside(200, 10, 140, 50)){
        if(score >= buttons.cost2){
            score -= buttons.cost2;
            buttons.cost2+=int(buttons.cost2/3);
            buttons.plus+=int(buttons.plus/4);              
        }
    }
    if(isMouseInside(390, 10, 140, 50)){
        if(score >= buttons.cost3){
            score -= buttons.cost3;
            buttons.cost3*=2;
            player.sizeX+=10;
        }
    }
    if(isMouseInside(width-210, 10, 200, 50) && buttons.hej == true){
        if(score >= buttons.cost4){
            score -= buttons.cost4;
            buttons.cost4 = "Max";
            player.speed += 5;
            buttons.hej = false;
        }
    }
}

    
function isMouseInside(x, y, w, h){
    if(mouseX > x && mouseX < x+w && mouseY > y && mouseY < y + h){
        return true; 
    } else {
        return false; 
    }
}
