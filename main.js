nose_x=0;
nose_y=0;
function setup()
{
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.hide()
//iniatinling a pozenet model
poseNet=ml5.poseNet(video,modelloaded)
//exicution of a model
poseNet.on("pose",gotposes)
}


function modelloaded()
{
    console.log("model is ready")
}    
function gotposes(results){
     if(results.length>0){
         console.log(results)
         nose_x=results[0].pose.nose.x
         console.log("nosex="+nose_x)
         nose_y=results[0].pose.nose.y      
         console.log("nosey="+results[0].pose.nose.y)
     }
}
function draw(){
    image(video,0,00,300,300)
    }