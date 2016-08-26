window.URL = window.URL || window.webkitURL;
navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia || navigator.msGetUserMedia;

var video = document.querySelector('video');
var canvas = document.querySelector('canvas');
var img = document.querySelector('img');
var btn = document.getElementById('btn');
var ctx = canvas.getContext('2d');
var localMediaStream = false;


function snapshot() {
  if (localMediaStream) {
    ctx.drawImage(video, 0,0);
    img.src = canvas.toDataURL();
  }
}

function dimensionFunction () {
        canvas.width=video.videoWidth;
        canvas.height=video.videoHeight;
        img.height=video.videoHeight;
        img.width=video.videoWidth;
        //console.log(video.videoWidth,video.videoHeight);
        btn.addEventListener('click', snapshot, false);
}

video.addEventListener("loadedmetadata", dimensionFunction, false);

if (navigator.getUserMedia) {
  navigator.getUserMedia({audio: false, video: true}, function(stream) {
        //console.log(stream);
    video.src = window.URL.createObjectURL(stream);
    video.play();//for firefox
    localMediaStream = true;
   
  }, function() {
        alert('could not access your camera!');
  });

} else {
  alert('getUserMedia() is not supported in your browser');
}
