var btn = document.querySelector("button");
var blb = document.querySelector(".bulb");

var state = 0;

btn.addEventListener("click", function() {
    if (state == 0) {
        btn.innerHTML = "OFF";
        blb.style.backgroundColor = "yellow";
        state = 1;
    }else if (state == 1) {
        btn.innerHTML = "ON";
        blb.style.backgroundColor = "White";
        state = 0;
    }

});