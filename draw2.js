let logo;
let startPosX = 15
let startPosY = 15
let endPosX;
let endPosY;
let max_distance;

function preload() {
  logo = loadImage("luvaLogo3.png")
}

function setup() {
  createCanvas(600, 600);
  max_distance = dist(0, 0, width, height);
}

function draw() {
  background('white');



  endPosX = map(mouseX, 0, width, startPosX - 5, startPosX + 5, true);
  endPosY = map(mouseY, 0, width, startPosY - 5, startPosY + 5, true);

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

      noStroke();
      let opacity = dist(mouseX, mouseY, i * 70, j * 70);
      opacity = (opacity / max_distance) * 100;
      //fill(100, 0, 0, opacity * 3 );
      //ellipse((i * 70) + 40, (j * 70) + 40, 70);
      tint(255, opacity * 10);
      image(logo, (i * 70) + endPosX, (j * 70) + endPosY, 50, 50);
    }
    }
}