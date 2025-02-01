let songName=document.querySelector("#song-name")
let songSinger=document.querySelector("#song-singer")
let songImage=document.querySelector(".song-image")
let playPauseImg=document.querySelector("#play-pause")
let volumeRange=document.querySelector("#volume-range")
let songRange=document.querySelector("#song-duration")
let volSvg=document.querySelector("#vol-svg")
let playlistImg=document.querySelector("#playlist_img")
let playlist=document.querySelector(".playlist")
let playlistSong=document.querySelectorAll(".playlist-song")
let index=2;
let playingSong=false;
let track=document.createElement("audio")
let songs=[
    {
        name:"Adiga",
        path:"Adigaa.mp3",
        image:"adiga.jpg",
        singer:"Karthik"
    },
    {
        name:"Satranga",
        path:"Satranga.mp3",
        image:"Satranga-img.jpg",
        singer:"Arjith singh"
    },
    {
        name:"Rooba Rooba",
        path:"Rooba Rooba.mp3",
        image:"Orange.jpg",
        singer:"Chinmayi and Shall Hada"
    },
    {
        name:"Gango renuka thalli",
        path:"Gango Renuka Thalli.mp3",
        image:"pushpa2.jpg",
        singer: "Mahilangam"
    },
    {
        name:"Tera Yaar Hoon Main",
        path:"Tera Yaar Hoon Main.mp3",
        image:"tere yar.jpg",
        singer:"Arjith Sing"
    },
    {
        name:"Nijama Kala",
        path:"Nijamaa Kalaa.mp3",
        image:"LB.jpg",
        singer:"G. V. Prakash Kumar and Krishna Tejasvi"
    }

]
function loadTrack(index){
track.src=songs[index].path;
songName.innerHTML=songs[index].name;
songSinger.innerHTML=songs[index].singer;
songImage.style= `background-image: url("${songs[index].image}");`
volume()
duration()
setInterval(()=>{
songRange.max=track.duration
songRange.value=track.currentTime
},1000)
track.loop=true
track.load()
}
loadTrack(index);

function playPause(){
    if(playingSong==false){
        playSong()
        
    }else{
        pauseSong()
        
    }
}
function playSong(){
    track.play();
    playingSong=true;
playPauseImg.src="pause.svg"
}
function pauseSong(){
    track.pause();
    playingSong=false;
playPauseImg.src="play-stroke-rounded.svg"
}
function nextSong(){
    if(index<songs.length-1){
        index++;
        loadTrack(index)
        playSong()
    }else{
        index=0;
        loadTrack(index)
        playSong()
    }
}
function previousSong(){
    if(index<0){
        index--;
        loadTrack(index)
        playSong()
    }else{
        index=songs.length-1;
        loadTrack(index)
        playSong()
    }
}   
function volume(){
    track.volume=volumeRange.value/100;
    if(volumeRange.value==0){
        volSvg.src="mute.svg"
    }else{
        volSvg.src="volume-high-stroke-rounded.svg"
    }
}    
function duration(){
 track.currentTime=songRange.value   
}
playlistImg.addEventListener("click",()=>{
playlist.classList.toggle("playlist-active")
if(playlist.classList.contains("playlist-active")){
    playlistImg.src="cross.svg"
}else{
    playlistImg.src="playlist.svg"
}
})
playlistSong.forEach((song,index) => {
    song.addEventListener('click',()=>{
        loadTrack(index);
        playSong()
        playlist.classList.remove("playlist-active")
         playlistImg.src="playlist.svg"
    })
})
