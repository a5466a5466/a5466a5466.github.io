
const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');


playButton.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
});