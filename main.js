function setup() {
    video = createCapture (VIDEO)
    video.size(550,500)

    canvas = createCanvas(550, 500)
    canvas.position(560,150)   
    
    poseNet = ml5.poseNet(video, modelLoded)
    poseNet.on('pose',gotPoses)
}
function gotPoses(results){
    if(results.length >0){
    console.log(results)
    leftWristX =results[0].pose.leftWristX.x
    rightWristX =results[0].pose.rightWristX.x
    difference = floor(leftWristX - rightWristX)
    }
}
function draw() {
    background('pink')
    textSize(difference);
    fill("#FFE787")
    text ('Hrishikesh Sagar',50,400)
}
function modelLoded() 
{
    console.log('poseNet is Initiliziled')
}
