class Buttons{
    constructor(){
        this.c = color(80);
        this.plus = 10;
        this.cost1 = 10;
        this.cost2 = 10;
        this.cost3 = 10;
        this.cost4 = 1000000;
        this.cost5 = 1000000;
        this.cost6 = 1000000000000000000000;
        this.hej = true;
        this.hej2 = true;
        this.d = this.nFormatter(this.cost4);
        this.d2 = this.nFormatter(this.cost5);
        this.shopIs = false;
    }
    
    update(){
        if(this.hej == false){
            this.d = "max";
        } else{
            this.d = this.nFormatter(this.cost4);
        }
        
        if(this.hej2 == false){
            this.d2 = "max";
        } else{
            this.d2 = this.nFormatter(this.cost5);
        }
        
        this.shop();
    }
    
    shop(){
        if(this.shopIs == true){
            noStroke();
            fill(55);
            rect(25, 25, width-50, height-50, 25);
            fill(this.c);
            rect(35, 35, 250, 70, 10);
            rect(325, 35, 250, 70, 10);
            rect(width/2+20, 35, 250, 70, 10);
            rect(width-285, 35, 250, 70, 10);
            rect(35, height-105, 250, 70, 10);
            rect(width-285, height-105, 250, 70, 10);
            this.t();
            push();
            fill(this.c);
            rectMode(CENTER);
            rect(width/2, height/2, 200, 200, 20);
            rect(width/2, height-70, 250, 70, 10);
            fill(255);
            textAlign(CENTER);
            textSize(30);
            text("speed+ $" + this.d, width/2, height-62);
            textSize(45);
            text("rebirth", width/2, height/2-30);
            text("$" + this.nFormatter(this.cost6), width/2, height/2+30);
            pop();
        }
        fill(this.c);
        rect(width-40, 5, 35, 35, 3);
        noStroke();
        fill(255);
        textSize(20);
        text("$", width-28,28);
    }
    
    t(){
        noStroke();
        fill(255);
        textSize(30);
        text("Balls+ $" + this.nFormatter(this.cost1), 55, 77);
        text("money+ $" + this.nFormatter(this.cost2), 55+(290*1), 77);
        text("size+ $" + this.nFormatter(this.cost3), 55+(290*2), 77);
        text("special " + chance/10 + " $" + this.d2, 55+(290*3), 77);
        textSize(60);
        text("save", 95, height-55);
        text("load", 100+(290*3), height-50);
    }
    
    nFormatter(num) {
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
      return item ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0";
    }
    
    
}
