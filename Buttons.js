class Buttons{
    constructor(){
        this.c = color(80);
        this.plus = 10;
        this.cost1 = 10;
        this.cost2 = 10;
        this.cost3 = 10;
        this.cost4 = 1000000;
        this.hej = true;
        this.d = this.nFormatter(this.cost4, 1);
    }
    
    update(){
        if(this.hej == false){
            this.d = "max"
        }
        fill(this.c);
        noStroke();
        rect(10, 10, 140, 50, 10);
        rect(200, 10, 140, 50, 10);
        rect(390, 10, 140, 50, 10);
        rect(width-210, 10, 200, 50, 10);
        fill(255);
        textSize(20);
        text("Balls+ $"+this.nFormatter(this.cost1, 1), 20, 40);
        text("money+ $"+this.nFormatter(this.cost2, 1), 210, 40);
        text("size+ $"+this.nFormatter(this.cost3, 1), 400, 40);
        text("speed+ $"+this.d, width-185, 40);
    }
    nFormatter(num, digits) {
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
}
