class Falling{
    constructor(){
        this.y = random(-10, -1000);
        this.x = random(float(0), float(width));
        this.c = color(random(255), random(255), random(255));
        this.size = (30);
        this.speed = 5;
        this.specint = int(random(1, 1000));
        this.superSpecint = int(random(1, 1000000));
        this.special = false;
        this.superSpecial = false
        this.specialRand();
        this.colorblind = false;
    }
    
    update(){
        this.draw();
    }
    
    draw(){
        push();
        fill(this.c);
        if(this.colorblind == true){
            stroke(255);
            strokeWeight(4);
        } else{
          noStroke();
        }
        ellipse(this.x, this.y, this.size);
        pop();
        
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
        for(var i = 1; i < chance+1; i++){
            if(this.superSpecint == i){
                this.superSpecial = true;
                this.special = false;
                this.size+=15;
                this.c = color(255, 255, 255);
                this.speed--;
            }
        }
    }
}
