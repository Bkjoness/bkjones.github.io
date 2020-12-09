let eyePosx = 100
let eyePosy = 100
let pupilPosx = 200
let pupilPosy = 200


function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('p5Canvas');

}

function draw() {
  background(128);
  strokeWeight(7);
  
   
  for(let i = 0; i <= 2; i++) {
    for(let j = 0; j <= 2; j++) {
  fill(255);
  ellipse(eyePosx * i + 100, eyePosy * j + 100, 100, 100);
      
      fill(mouseY, 0, 0, 50);
  ellipse(eyePosx * i + 100, eyePosy * j + 100, 100, 100);
  
  
  pupilPosx = map(mouseX, 0, width, eyePosx - 20, eyePosx + 20, true);
  pupilPosy = map(mouseY, 0, height, eyePosy - 20, eyePosy + 20, true);
  
  fill(0);
  ellipse(pupilPosx + 100 * i, pupilPosy + 100 * j, 30, 30);
    }
  }
}