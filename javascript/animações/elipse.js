// ANIMAÇÃO DA ELIPSE

noStroke();

var x = 200;
var y = 350;
var ballWidth = 300;
var ballHeight = 200;

draw = function() {
    background(255, 206, 71);

    fill(191, 0, 255);
    ellipse(x, y, ballWidth, ballHeight);

    x = x + 1;
    y = y - 2;
    ballWidth = ballWidth * 99/100;
    ballHeight = ballHeight *  99/100;
};