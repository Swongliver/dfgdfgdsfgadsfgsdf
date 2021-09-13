console.log("ml5 version=",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/W-llAz4K0/model.json",modelLoaded)
function modelLoaded(){
    console.log("modelLoaded")
}
Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:80,
})
camera=document.getElementById("camera");
Webcam.attach(camera);
function snap(){
Webcam.snap(function(data_uri){
    console.log(data_uri);
    document.getElementById("result").innerHTML="<img id='captured_image' src='"+ data_uri+"'>";
})
}
prediction_1="";
prediction_2="";
function speak(){
    var synth=window.speechSynthesis;
var speak_1="The first prediction is "+ prediction_1;
var speak_2="and the second prediction is "+ prediction_2
var utter_this= new SpeechSynthesisUtterance(speak_1+speak_2)
synth.speak(utter_this) 
}
function speak(){
    var synth=window.speechSynthesis;
var speak_1="The first prediction is "+ prediction_1;
var speak_2="and the second prediction is "+ prediction_2
var utter_this= new SpeechSynthesisUtterance(speak_1+speak_2)
synth.speak(utter_this) 
}
function check(){
    img=document.getElementById("captured_image")
    classifier.classify(img, prediction)
    
}
function prediction(error, results){
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        prediction_1=results[0].label
        prediction_2=results[1].label
        document.getElementById('emotionLabel1').innerHTML=prediction_1
        document.getElementById('emotionLabel2').innerHTML=prediction_2
        speak()
        if (prediction_1=="Thumbs Up") {
            document.getElementById("result_emotion_name1").innerHTML="&#128077"
        } else if (prediction_1=="Thumbs Down") {
            document.getElementById("result_emotion_name1").innerHTML="&#128078"
        } else if (prediction_1=="Peace"){
            document.getElementById("result_emotion_name1").innerHTML="&#9996"
        }
        else if (prediction_1=="Ok Sign"){
            document.getElementById("result_emotion_name1").innerHTML="&#128076"
        }
        if (prediction_2=="Thumbs Up") {
            document.getElementById("result_emotion_name2").innerHTML="&#128077"
        } else if (prediction_2=="Thumbs Down") {
            document.getElementById("result_emotion_name2").innerHTML="&#128078"
        } else if (prediction_2=="Peace"){
            document.getElementById("result_emotion_name2").innerHTML="&#9996"
        }
        else if (prediction_2=="Ok Sign"){
            document.getElementById("result_emotion_name2").innerHTML="&#128076"
        }

        
    }
}
