// @ts-nocheck

var buttonArray = document.querySelectorAll(".set button");

for (var i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener("click", function(event) {
    makeSound(event.target.textContent);
    playAnimation(event.target.textContent);

  });
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  playAnimation(event.key);
});


function makeSound(key) {
  var audioFile;

  switch (key) {
    case "w":
      audioFile = "tom-1.mp3";
      break;
    case "a":
      audioFile = "tom-2.mp3";
      break;
    case "s":
      audioFile = "tom-3.mp3";
      break;
    case "d":
      audioFile = "tom-4.mp3";
      break;
    case "j":
      audioFile = "snare.mp3";
      break;
    case "k":
      audioFile = "crash.mp3";
      break;
    case "l":
      audioFile = "kick-bass.mp3";
      break;
    default:
      console.log("invalid key");
  }
  var audio = new Audio("sounds/" + audioFile);
  audio.play();
} 


function playAnimation(key) {
  var button = document.querySelector("." + key);
  button.classList.add("pressed");

  setTimeout(function(){
    button.classList.remove("pressed");
  }, 100);
}

// This code introduces redundant logic.
// The event type has already been established by the EventListener. Better to use anonymous functions
// function playSound(event) {
//   if (event.type == "click") {
//     var audioFile = getAudioFile(event.target.textContent);
//   }
//   else if (event.type == "keydown") {
//     var audioFile = getAudioFile(event.key);
//   }
  
//   var audio = new Audio("sounds/" + audioFile);
//   audio.play();
// }