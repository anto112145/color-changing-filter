
function setup(){
    canvas = createCanvas(500,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    uc = "";
}
function apply(){
    uc = document.getElementById("colour").value;
}
function draw(){
    image(video,0,0,500,350)
    tint(uc);
}
function takepic(){
    save("colored_image.png")
}
