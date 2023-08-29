// ANIMAÇÃO DO CARRO

noStroke();

// posição do carro
var x = 10;
    
draw = function() {
    
    // cor de fundo
    background(151, 244, 247);
    
    // corpo do carro desenhado
    fill(255, 0, 115);
    rect(x, 200, 100, 20);
    rect(x + 15, 178, 70, 40);
    
    // desenho das rodas
    fill(77, 66, 66);
    ellipse(x + 25, 221, 24, 24);
    ellipse(x + 75, 221, 24, 24);
    
    x = x + 1;
};