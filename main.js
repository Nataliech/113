function preload() {

}

function setup() {

    canvas = createCanvas(620, 480);
    canvas.position(100, 240);
    video = createCapture(VIDEO)
    video.hide();

    tint_color = "";
}

function draw(){

    image(video, 0, 0, 620, 480);
    tint(tint_color);
}

function take_snapshot() {

    save('student_name.png');
}
