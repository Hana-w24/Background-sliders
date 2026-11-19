var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.ariaValueMax;

slider.oninput  = function() {
    output.innerHTML = this.value
    console.log(this.value);
}