let a;

let value = 0;


function setup() {
  createCanvas(192,157);
  stroke(255);
  a = height / 3;
  
  
  
}

function draw() {
  background(255, 204, 0);
  line(0, a, width, a);
  line(3, 2, width, a);
  line(3, 25, width, a);
  line(26, 65, width, a);
  fill(value);
  rect(25, 25, 50, 50);
  strokeWeight(12.0);
  strokeCap(ROUND);
  line(20, 30, 80, 30);
  strokeCap(SQUARE);
  line(20, 50, 80, 50);
  strokeCap(PROJECT);
  line(20, 70, 80, 70);
 



  a = a - 0.5;
  if (a < 0) {
  a = height;


  }
}
function deviceMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  

  
  }
}
