var sliderR = document.getElementById("myRangeR");
var outputR = document.getElementById("demoR");

var sliderG = document.getElementById("myRangeG");
var outputG = document.getElementById("demoG");

var sliderB = document.getElementById("myRangeB");
var outputB = document.getElementById("demoB");

outputR.innerHTML = sliderR.value;

outputG.innerHTML = sliderG.value;

outputB.innerHTML = sliderB.value;

let RED = 128
let GREEN = 128
let BLUE = 128

sliderR.oninput  = function() {
    outputR.innerHTML = this.valueR;
    this.valueR = RED;
    updateBackground()
}

sliderG.oninput  = function() {
    outputG.innerHTML = this.valueG;
    this.valueG = GREEN;
    updateBackground()
}

sliderB.oninput  = function() {
    outputB.innerHTML = this.valueB;
    this.valueB = BLUE;
    updateBackground()
}

function updateBackground() {
  document.body.style.backgroundColor = `rgb(${RED}, ${GREEN}, ${BLUE})`;
}
