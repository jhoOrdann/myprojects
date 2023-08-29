// ANIMAÇÃO DE ESTRELA CADENTE

var xPos = 20;
var yPos = 20;
var xPos2 = 370;
var yPos2 = 30;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos2, yPos2, 10, 10);
    xPos+=5;
    yPos+=5;
    xPos2-=4;
    yPos2+=3;
};