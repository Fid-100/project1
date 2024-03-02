const video = document.getElementById("myVideo");
const btnPlay = document.getElementById("Play");
const btnMute = document.getElementById('mute')
const range = document.getElementById('range')

const playlist = ['video1','video2','video3']
let index = 0

function next(){
if(index < playlist.length-1){
index = index + 1
}else{
    index = 0
}

video.src = `video/${playlist[index]}.mp4`
}

function Prev(){
    if(index > 0){
    index = index - 1
}else{
    index = playlist.length
}
    video.src = `video/${playlist[index]}.mp4`
    }

function rangeChange(){
    video.volume = range.value
}

function Play(){
    if (video.paused){
        video.play();
        btnPlay.innerHTML = "pause";
    }else{
        video.pause();
        btnPlay.innerHTML = "play";
    }
}

function mute(){
    if(video.muted){
        video.muted = false
        btnMute.textContent = 'off'
    }else{
        video.muted = true
        btnMute.textСontent = 'On'
    }
}