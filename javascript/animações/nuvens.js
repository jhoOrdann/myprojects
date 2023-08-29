// ANIMAÇÃO DE AFASTANDO AS NUVENS

noStroke();
var leftX = 151;
var rightX = 267;
var sunRadius = 100;

draw = function() {
    background(184, 236, 255);
    
    fill(255, 170, 0);
    ellipse(200, 100, sunRadius, sunRadius);
    
    // nuvens
    fill(255, 255, 255);
    // nuvem esquerda
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX+62, 150, 70, 60);
    ellipse(leftX-62, 150, 70, 60);
    
    // nuvem direita
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX+62, 100, 70, 60);
    ellipse(rightX-62, 100, 70, 60);
    
    leftX--;
    rightX++;
    sunRadius += 2;
};