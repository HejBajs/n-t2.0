class Buttons{
    constructor(){
        this.c = color(80);
        this.plus = 10;
        this.cost1 = 10;
        this.cost2 = 10;
        this.cost3 = 10;
        this.cost4 = 1000000;
        this.cost5 = 1000000;
        this.hej = true;
        this.hej2 = true;
        this.d = this.nFormatter(this.cost4);
        this.d2 = this.nFormatter(this.cost5);
    }
    
    update(){
        if(this.hej == false){
            this.d = "max";
        }
        
        if(this.hej2 == false){
            this.d2 = "max";
        } else{
            this.d2 = this.nFormatter(this.cost5);
        }
        fill(this.c);
        noStroke();
        rect(10, 10, 140, 50, 10);
        rect(200, 10, 140, 50, 10);
        rect(390, 10, 140, 50, 10);
        rect(width-210, 10, 200, 50, 10);
        rect(width-420, 10, 200, 50, 10);
        fill(255);
        textSize(20);
        text("Balls+ $"+this.nFormatter(this.cost1), 20, 40);
        text("money+ $"+this.nFormatter(this.cost2), 210, 40);
        text("size+ $"+this.nFormatter(this.cost3), 400, 40);
        text("speed+ $"+this.d, width-185, 40);
        text("special " + chance/10 + "% " + this.d2, width-395, 40);
    }
    nFormatter(num) {
      const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "B" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "Q" },
        { value: 1e18, symbol: "P" },
        { value: 1e21, symbol: "E" },
        { value: 1e24, symbol: "G" }
        { value: 1e24, symbol: "R" }
      ];
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
      });
      return item ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0";
    }
}
