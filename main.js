function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4S-80yW/model.json', modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("got result");
}