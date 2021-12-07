class Player{
    constructor(){
        this.sizeX = 120;
        this.sizeY = 35;
        this.y = windowHeight-100;
        this.x = (width/2)-(this.sizeX/2);
        this.c = color(random(255), random(255), random(255));
        this.dir = 0;
        this.speed = 10;
    }
    
    update(){
        this.draw();
        this.input();
    }
    
    draw(){
        fill(this.c);
        noStroke();
        rect(this.x, this.y, this.sizeX, this.sizeY);
        this.x += this.dir;
        if(this.x < 0){
            this.x = 0;
        }
        if(this.x+this.sizeX > width){
            this.x = width-this.sizeX;
        }
    }
    
    input(){
        if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
            this.dir=this.speed;
        }else if(this.dir > 0){
            this.dir=0;
        } else{
            
        }
        
        if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
            this.dir=-this.speed;
        }else if(this.dir < 0){
            this.dir=0;
        }else{
            
        }
    }
}
