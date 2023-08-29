// ANIMAÇÃO DO SOL EXPANDINDO

noStroke();
// cor de fundo
background(82, 222, 240);

// tamnho do sol
var sunSize = 30; 

draw = function() {
    sunSize = sunSize + 1;
    
    // sol
    fill(255, 204, 0);
    ellipse(200, 298, sunSize, sunSize);
    
    // Land
    fill(76, 168, 67);
    rect(0, 300, 400, 100);
    
};