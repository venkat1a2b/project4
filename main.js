function preload()
{
}
function setup()
{
        canvas = createCanvas(700 ,700);
        canvas.center();
        canvas = createCanvas(300 , 300);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();
}
function draw()
{
    image(video,0,0,300,300);
}