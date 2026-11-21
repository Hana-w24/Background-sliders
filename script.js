const sliderR = document.getElementById("myRangeR");
const outputR = document.getElementById("demoR");

const sliderG = document.getElementById("myRangeG");
const outputG = document.getElementById("demoG");

const sliderB = document.getElementById("myRangeB");
const outputB = document.getElementById("demoB");

let RED = 255
let GREEN = 255
let BLUE = 255

sliderR.value = RED
sliderG.value = GREEN
sliderB.value = BLUE

outputR.innerHTML = RED;
outputG.innerHTML = GREEN;
outputB.innerHTML = BLUE;

updateBackground()


sliderR.oninput = function() {
    RED = this.value;
    outputR.innerHTML = RED;
    updateBackground();
}

sliderG.oninput = function() {
    GREEN = this.value;
    outputG.innerHTML = GREEN;
    updateBackground();
}

sliderB.oninput = function() {
    BLUE = this.value;
    outputB.innerHTML = BLUE;
    updateBackground()
}

function updateBackground() {
  document.body.style.backgroundColor = `rgb(${RED}, ${GREEN}, ${BLUE})`;
}
