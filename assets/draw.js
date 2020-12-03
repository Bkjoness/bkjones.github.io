let ellipseArray = [];
        let numOfEllipses = 20;
        let ellipseRadius = 20;


        function setup() {
        let canvas = createCanvas(400, 400);
        canvas.parent('p5canvas');
        
        for (let i = 0; i < numOfEllipses; i++) {
        let vector = createVector(-400, -400);
            ellipseArray.push(vector);
            }
        }

        function draw() {
        background(255, 50);
        //fill(0);
        noStroke();
        
        let oldestPosition = ellipseArray.shift();
        let newestPosition = createVector(mouseX, mouseY);
        
        ellipseArray.push(newestPosition);
                                        
                                        
        for (let i = 0; i < ellipseArray.length; i++) {
            let temporaryVector = ellipseArray[i]
        
            if (mouseIsPressed) {
                fill(80, 250, i*5);
            }
            else fill(0);
            ellipse(temporaryVector.x, temporaryVector.y, ellipseRadius, ellipseRadius);
        }
        
        ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius);
        
        
        }