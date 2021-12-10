let fallings = [];
let player;
var start, current;
var score = 0;
let buttons;
let chance = 1;

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
    text("$"+nFormatter(score, 1), width/2, 50);
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
            buttons.cost1*=1.2;
            fallings.push(new Falling());
        }
    }
    if(isMouseInside(200, 10, 140, 50)){
        if(score >= buttons.cost2){
            score -= buttons.cost2;
            buttons.cost2*=1.3;
            buttons.plus*=1.25;              
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
            buttons.cost4 = 10000000000000000000000000000000000000;
            player.speed += 5;
            buttons.hej = false;
        }
    }
    
    if(isMouseInside(width-420, 10, 200, 50)&& buttons.hej2 == true){
        if(score >= buttons.cost5){
            score -= buttons.cost5;
            buttons.cost5 *= 2;
            chance++;
            if(chance == 50){
                buttons.hej2 = false;
            }
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

function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "B" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}
