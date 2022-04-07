let capture;
let video;
let timer = 5

let myFont;

function preload() {
  // myFont = loadFont('SourceSansPro-SemiBold.ttf');
}

function setup() {
  let myCanvas = createCanvas(350, 400);
  myCanvas.parent('canvas');
  colorMode(HSB);
  video = createCapture(VIDEO);
  video.position(0,0);
  video.size(350, 300)
  
  //font
  fill(0,0,100);
  // textFont(myFont);
}

function draw() {
    background(0,23,100);
     video.show();
         // filter('THRESHOLD');
         image(video, 0, 0, 350, 300);
		video.hide();
  
  selfieTimer();       
  textAlign(CENTER, CENTER);
  textSize(24);
  text(timer, width/2, 340);
}

function selfieTimer() {
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then     a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("I visited Arianna's House!", width/2, 340);
    save('mySelfie.jpg');
    noLoop();
		timer.hide();
  }
  
}