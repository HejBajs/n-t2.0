class Buttons{
    constructor(){
        this.c = color(80);
        this.plus = 10;
        this.cost1 = 10;
        this.cost2 = 10;
        this.cost3 = 10;
        this.cost4 = 1000000;
        this.hej = true;
    }
    
    update(){
        fill(this.c);
        noStroke();
        rect(10, 10, 140, 50, 10);
        rect(200, 10, 140, 50, 10);
        rect(390, 10, 140, 50, 10);
        rect(width-210, 10, 200, 50, 10);
        fill(255);
        textSize(20);
        text("Balls+ $"+this.cost1, 20, 40);
        text("money+ $"+this.cost2, 210, 40);
        text("size+ $"+this.cost3, 400, 40);
        text("speed+ $"+this.cost4, width-185, 40);
    }
}
