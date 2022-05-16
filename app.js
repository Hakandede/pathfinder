var gridRow = 10;
var gridCol = 10;
var grid = new Array(gridCol);
var w, h;


var openSet = [];
var closedSet = [];
var start;
var end;




function setup() {
    createCanvas(600, 600);
    w = width / gridCol;
    h = height / gridRow;
}

function spot(i, j) {
    this.x = i;
    this.y = j
    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.show = function (col) {

        fill(col);
        noStroke;
        rect(this.x * w, this.y * h, w - 1, h - 1);
    }
}



for (var i = 0; i < gridCol; i++) {
    grid[i] = new Array(gridRow);
}

for (var i = 0; i < gridCol; i++) {
    for (var j = 0; j < gridRow; j++) {
        grid[i][j] = new spot(i, j);
    }
}

/////////////////////////////
start = grid[0][0];
end = grid[gridCol - 1][gridRow - 1];
/////////////////////////////

openSet.push(start);

function draw() {
    if (openSet.length > 0) {
        var winner = 0;
        for (var i = 0; i < openSet.length; i++)
        {
            if(openSet[i].f < openSet[winner].f){
                winner = i;
            }
        }

        var current = openSet[winner]

        if (current === end)
        {
            console.log("done")
        }
        
        closedSet.push(current);
    } else {

    }

    for (var i = 0; i < gridCol; i++) {
        for (var j = 0; j < gridRow; j++) {
            grid[i][j].show(color(255));
        }
    }

    for (var i = 0; i < closedSet.length; i++) {
        closedSet[i].show(color(255, 0, 0))
    }

    for (var i = 0; i < openSet.length; i++) {
        openSet[i].show(color(0, 255, 0))
    }
}


