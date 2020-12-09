let eyePosx = 100
let eyePosy = 100

let novDays = 30

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5Canvas');

}

function draw() {
  background(128);
  strokeWeight(7);
  
  for (let i = 1; i <= 30; i++) {

    push();
    strokeWeight(10);

    // Space is the variable for the correct positioning of the calender
    let space = (600 / novDays);
    // Day is a function that gets the current day from the laptop calender
    let d = day();

    // Drawing the line function, with x positions determined by the increment of i multiplied by the space variable.
    line(100 + (i * space), 350, 100 + (i * space), 450);


    // This is just to add text numbers that correspond to the days, again using the index to control this.
    push();
    textSize(15)
    strokeWeight(2)
    fill(0);
    text(i, 94 + (i * space), 475)
    pop();

    if (i === (d - 1)) {
      stroke(180, 200, 180);
      fill(180, 200, 180);
      ellipse(120 + (i * space), 400, 20, 20);
    } else {
      stroke("black");
    }

    // This text function is just to state how many days we have had so far in november.
    push();
    noStroke();
    textSize(50)
    text('We have had ' + d + ' days so far.', 90, 300);
    pop();
  }
   
  for(let i = 0; i <= 17; i++) {
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