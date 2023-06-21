/*Video*/
let video = document.getElementById("video__play");
video
function mute() {
    if (video.muted === false) {
        video.muted = true;
    }
    else {
        video.muted = false;
    }
}
document
    .getElementById("sound__button")
    .addEventListener("click", mute);

