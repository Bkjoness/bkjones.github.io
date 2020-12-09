let eyePosx = 100
let eyePosy = 100

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5Canvas');

}

function draw() {
  background(128);
  strokeWeight(7);
  
   
  for(let i = 0; i <= 14; i++) {
    for(let j = 0; j <= 12; j++) {
  fill(255);
  ellipse(eyePosx * i + 100, eyePosy * j + 100, 100, 100);
      
      fill(mouseY / 5, 0, 0, 50);
  ellipse(eyePosx * i + 100, eyePosy * j + 100, 100, 100);
  
  
  pupilPosx = map(mouseX, 0, windowWidth, eyePosx - 20, eyePosx + 20, true);
  pupilPosy = map(mouseY, 0, windowHeight, eyePosy - 20, eyePosy + 20, true);
  
  fill(0);
  ellipse(pupilPosx + 100 * i, pupilPosy + 100 * j, 30, 30);
    }
  }
}