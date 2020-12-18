var i = 0;
var txt = 'I am a game developer currently working on multiple of my own projects! Click the button below to check some of them out!';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("jstext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
