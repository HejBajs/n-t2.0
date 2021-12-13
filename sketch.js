let fallings = [];
let player;
var score = 0;
let buttons;
let chance = 1;
let v = "V1.5"

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
        if(collide(player.x, player.y, player.sizeX, player.sizeY, fallings[i].x, fallings[i].y-15)){
            if(fallings[i].special==true){
                score+=(buttons.plus*200);
            }else{
                score+=buttons.plus;
            }
            fallings[i] = new Falling();
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
    text(v, width-120, height-15);
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
            chance+=1;
            if(chance == 500){
                buttons.hej2 = false;
            }
        }
    }
    
    if(isMouseInside(10, height-60, 140, 50)){save1();}
    if(isMouseInside(200, height-60, 140, 50)){load1();}
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
        { value: 1e12, symbol: "t" },
        { value: 1e15, symbol: "q" },
        { value: 1e18, symbol: "Q" },
        { value: 1e21, symbol: "s" },
        { value: 1e24, symbol: "S" },
        { value: 1e27, symbol: "o" },
        { value: 1e30, symbol: "n" },
        { value: 1e33, symbol: "d" },
        { value: 1e36, symbol: "U" },
        { value: 1e39, symbol: "D" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

function save1(){
    const dataToStore = {player: player, fallings: fallings.length, buttons: buttons, score: score, chance: chance};
    localStorage.setItem("storedData", JSON.stringify(dataToStore));
}

function load1(){
    const data = JSON.parse(localStorage.getItem("storedData"));
    player.sizeX = data.player.sizeX;
    player.speed = data.player.speed;
    player.x = data.player.x;
    player.y = data.player.y;
    fallings = [];
    for(var i = 0; i < data.fallings; i++){
        fallings.push(new Falling());
    }
    buttons.plus = data.buttons.plus;
    buttons.cost1 = data.buttons.cost1;
    buttons.cost2 = data.buttons.cost2;
    buttons.cost3 = data.buttons.cost3;
    buttons.cost4 = data.buttons.cost4;
    buttons.cost5 = data.buttons.cost5;
    buttons.hej = data.buttons.hej;
    buttons.hej2 = data.buttons.hej2;
    score = data.score;
    chance = data.chance;
}
