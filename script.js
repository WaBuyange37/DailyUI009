// variable cration that will target element frmon Mudundo  html
const play = document.querySelector(".play");
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");

const trackImage = document.querySelector(".track-image");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
//
const trackCurrentTime = document.querySelector(".current-time");
const trackDuration = document.querySelector(".duration-time");
const slider = document.querySelector(".duration-slider");
//
const showVolume = document.querySelector("#show-volume");
const volumeIcon = document.querySelector("#volume-icon");
const currentVolume = document.querySelector("#volume");
//
const autoPlay = document.querySelector(".play-all");
//
const hamburger = document.querySelector(".far-bars");
const closeItems = document.querySelector(".far-times");
//
const musicPlaylist = document.querySelector(".music-playelist");
const playlist = document.querySelector(".playlist");

let timer;
let autoplay = 0;
let indexTrack = 0;
let songIsPlaying = false;
let track = document.createElement('audio');
//import


//all event listeners
play.addEventListener("click", justPlay);

//load tracks
function loadTrack(indexTrack) {
    track.src = trackList[indexTrack].path;
    trackImage.src = trackList[indexTrack].img;
    title.innerHTML = trackList[indexTrack].name;
    artist.innerHTML = trackList[indexTrack].singer;

    track.load();

}
loadTrack(indexTrack);



//play song function
function playSong() {
    track.play();
    songIsPlaying = true;
    play.innerHTML = '<i class="fas fa-pause"></i>';
}

//pause song function
function pauseSong() {
    track.pause();
    songIsPlaying = false;
    play.innerHTML = '<i class="fas fa-play"></i>';
}

//play or pause
function justPlay() {
    if (songIsPlaying == false) {
        playSong();
    } else {
        pauseSong();
    }
}