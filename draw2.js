let novDays = 31

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5Canvas2');
}

function draw() {
  background(128);

  // Creating the for loop up to and including 30
  for (let i = 1; i <= novDays; i++) {

    push();
    strokeWeight(10);

    // Space is the variable for the correct positioning of the calender
    let space = (600 / novDays);
    // Day is a function that gets the current day from the laptop calender
    let d = day();

    // Drawing the line function, with x positions determined by the increment of i multiplied by the space variable.
    line(300 + (i * space), 350, 350 + (i * space), 450);


    // This is just to add text numbers that correspond to the days, again using the index to control this.
    push();
    textSize(14)
    noStroke();
    strokeWeight(2)
    fill(0);
    text(i, 350 + (i * space), 470)
    pop();

    if (i === (d - 1)) {
      stroke(180, 200, 180);
      fill(180, 200, 180);
      //ellipse(370 + (i * space), 400, 20, 20);
    } else {
      stroke("black");
    }

    // This text function is just to state how many days we have had so far in november.
    push();
    noStroke();
    textSize(50)
    text('We have had ' + d + ' days so far.', 340, 300);
    pop();
  }
}