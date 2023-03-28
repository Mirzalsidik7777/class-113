function preload(){
}

function setup(){
    canvas = createCanvas(300, 300)
    circle(30, 30, 20);
    rect(30, 20, 200, 200);
    ellipse(56, 46, 20, 20);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
}
function take_snapshot(){
    save('myFilterimage.png');
}