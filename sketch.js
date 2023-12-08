 let path = [];

    function setup() {
      createCanvas(1700, 900);
      stroke(0); 
      strokeWeight(3); 
    }

    function draw() {
      background(255); 
      beginShape();
      for (let i = 0; i < path.length; i++) {
        vertex(path[i].x, path[i].y);
      }
      endShape();

      
      fill(0);
      noStroke();
      textSize(16);
      textAlign(CENTER);
      text('Click and drag to create Arabic calligraphy strokes!', width / 2, height - 20);
    }

    function mousePressed() {
      path = []; // new path
    }

    function mouseDragged() {
      let point = createVector(mouseX, mouseY);
      path.push(point); 
    }

    function mouseReleased() {
      
      console.log('Path:', path);
    }