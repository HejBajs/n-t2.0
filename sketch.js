let fallings = [];
let player;
var score = 0;
let buttons;
let chance = 1;
let v = "V1.8"
var rebirthScore = 1;

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
                score+=((buttons.plus*rebirthScore)*200);
            }else{
                score+=(buttons.plus*rebirthScore);
            }
            fallings[i] = new Falling();
        }
        if(fallings[i].y > (windowHeight+50)){
            fallings[i] = new Falling();
        }
    }
    showScore();
    player.update();
    buttons.update();
}

function keyTyped(){
    if(key === "e"){
        if(buttons.shopIs == false){
            buttons.shopIs = true;
        }else{
            buttons.shopIs = false;
        }
    }
}

function showScore(){
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
    if(isMouseInside(width-40, 5, 35, 35)){
        if(buttons.shopIs == false){
            buttons.shopIs = true;
        }else{
            buttons.shopIs = false;
        }
    }
    
    if(isMouseInside(35, 35, 250, 70) && buttons.shopIs == true){
        if(score >= buttons.cost1){
            fallings.push(new Falling());
            score-=buttons.cost1;
            buttons.cost1*=1.2
        }
    }
    
    if(isMouseInside(325, 35, 250, 70) && buttons.shopIs == true){
        if(score >= buttons.cost2){
            buttons.plus*=1.2
            score-=buttons.cost2;
            buttons.cost2*=1.35
        }
    }
    
    if(isMouseInside(width/2+20, 35, 250, 70) && buttons.shopIs == true){
        if(score >= buttons.cost3){
            player.sizeX+=5;
            score-=buttons.cost3;
            buttons.cost3*=2;
        }
    }
    
    if(isMouseInside(width-285, 35, 250, 70) && buttons.shopIs == true && buttons.hej2 == true){
        if(score >= buttons.cost5){
            chance+=1;
            score-=buttons.cost5;
            buttons.cost5*=2;
            if(chance >= 50){
                buttons.hej2 = false;
            }
        }
    }
    
    if(isMouseInside((width/2)-(250/2), (height-70)-(70/2), 250, 70) && buttons.shopIs == true && buttons.hej == true){
        if(score >= buttons.cost4){
            player.speed+=3;
            score-=buttons.cost4;
            buttons.cost4*=1000;
            if(player.speed >= 16){
                buttons.hej = false;
            }
            
        }
    }
    
    if(isMouseInside(35, height-105, 250, 70) && buttons.shopIs == true){save1()}
    if(isMouseInside(width-285, height-105, 250, 70) && buttons.shopIs == true){load1()}
    
    if(isMouseInside((width/2)-100, (height/2)-100, 200, 200) && buttons.shopIs == true){
        rebirth();
    }
}

function rebirth(){
    if(score >= buttons.cost6){
        score-=buttons.cost6;
        buttons.cost6 *=10000000;
        
        score = 0;
        fallings = [new Falling()];
        player.speed = 10;
        buttons.hej = true;
        buttons.hej2 = true;
        chance = 1;
        buttons.plus = 10;
        player.sizeX = 120;
        buttons.cost1 = 10;
        buttons.cost2 = 10;
        buttons.cost3 = 10;
        buttons.cost4 = 1000000;
        buttons.cost5 = 1000000;
        
        rebirthScore++;
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
        { value: 1e12, symbol: "t" },
        { value: 1e15, symbol: "q" },
        { value: 1e18, symbol: "Q" },
        { value: 1e21, symbol: "s" },
        { value: 1e24, symbol: "S" },
        { value: 1e27, symbol: "o" },
        { value: 1e30, symbol: "n" },
        { value: 1e33, symbol: "d" },
        { value: 1e36, symbol: "U" },
        { value: 1e39, symbol: "D" },
        { value: 1e42, symbol: "T" },
        { value: 1e45, symbol: "Qt" },
        { value: 1e48, symbol: "Qd" },
        { value: 1e51, symbol: "Sd" },
        { value: 1e54, symbol: "St" },
        { value: 1e57, symbol: "O" },
        { value: 1e60, symbol: "N" },
        { value: 1e63, symbol: "v" },
        { value: 1e66, symbol: "c" },
        { value: 1e69, symbol: "Sug min balle Corre" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

function save1(){
    const dataToStore = {player: player, fallings: fallings.length, buttons: buttons, score: score, chance: chance, rebirthScore: rebirthScore};
    localStorage.setItem("storedData", JSON.stringify(dataToStore));
}

function load1(){
    try{
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
        buttons.cost6 = data.buttons.cost6;
        buttons.hej = data.buttons.hej;
        buttons.hej2 = data.buttons.hej2;
        score = data.score;
        chance = data.chance;
        rebirthScore = data.rebirthScore
    }catch{
        print("error loading");
    }
}
