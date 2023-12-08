 let path = [];

    function setup() {
      createCanvas(1700, 700);
      stroke(0); // Black stroke color
      strokeWeight(3); // Stroke weight
    }

    function draw() {
      background(255); // White background

      // Display the current path
      beginShape();
      for (let i = 0; i < path.length; i++) {
        vertex(path[i].x, path[i].y);
      }
      endShape();

      // Display instructions
      fill(0);
      noStroke();
      textSize(16);
      textAlign(CENTER);
      text('Click and drag to create Arabic calligraphy strokes!', width / 2, height - 20);
    }

    function mousePressed() {
      path = []; // Start a new path
    }

    function mouseDragged() {
      let point = createVector(mouseX, mouseY);
      path.push(point); // Add points to the path
    }

    function mouseReleased() {
      // You can process the path here, for example, by adding Arabic letters
      // For simplicity, let's just display the path for now
      console.log('Path:', path);
    }