class Falling{
    constructor(){
        this.y = random(-10, -1000);
        this.x = random(float(0), float(width));
        this.c = color(random(255), random(255), random(255));
        this.size = (30);
        this.speed = 5;
        this.specint = int(random(1, 1000));
        this.special = false;
        this.specialRand();
    }
    
    update(){
        this.draw();
    }
    
    draw(){
        fill(this.c);
        noStroke();
        ellipse(this.x, this.y, this.size);
        
        this.y += this.speed;
    }
    
    specialRand(){
        for(var i = 1; i < chance+1; i++){
            if(this.specint == i){
                this.special = true;
                this.size+=10;
                this.c = color(255,215,0);
                this.speed++;
            }
        }
    }
}
