class Falling{
    constructor(){
        this.y = random(-10, -1000);
        this.x = random(float(0), float(windowWidth));
        this.c = color(random(255), random(255), random(255));
        this.size = (30);
        this.speed = 5;
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
    
}