let progress = document.querySelector("#progress");
let song = document.querySelector(".song");
let ctrl = document.querySelector(".cntrl");
let play = document.querySelector(".play");
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

song.ontimeupdate = function () {
  progress.value = song.currentTime;
};

play.addEventListener("click", () => {
  if (ctrl.classList.contains("fa-pause")) {
    song.pause();
    ctrl.classList.remove("fa-pause");
    ctrl.classList.add("fa-play");
  } else {
    song.play();
    ctrl.classList.add("fa-pause");
    ctrl.classList.remove("fa-play");
  }
});

progress.onchange=function(){
    song.play();
    ctrl.classList.remove("fa-play");
    ctrl.classList.add("fa-pause");
    song.currentTime=progress.value;
    
}

