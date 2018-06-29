const audio = document.getElementById('audio1');
const lengthView = document.getElementsByClassName('audio-length')[0];

function play() {
    if (audio.paused && !audio.ended) {
        audio.play();
    } else {
        audio.pause();
    }
};

function formatTime(s, m) {
    var duration = parseInt( audio.duration ),
        currentTime = parseInt( audio.currentTime ),
        timeLeft = duration - currentTime,
        s, m;
    
    
    s = timeLeft % 60;
    m = Math.floor( timeLeft / 60 ) % 60;
    
    s = s < 10 ? "0"+s : s;
    m = m < 10 ? "0"+m : m;
    
    return m + ':' + s;
}

setInterval(function() {
    lengthView.textContent = formatTime(audio.duration);
}, 100);