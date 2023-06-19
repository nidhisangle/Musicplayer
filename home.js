const musicContainer=document.getElementaryById('audio-container');
const playbtn=document.getElementById('play');
const prevbtnbtn=document.getElementById('prev');
const nextbtn=document.getElementById('next');
const audio=document.getElementById('audio');
const progress=document.getElementById('progress');
const title=document.getElementById('title');
const cover=document.getElementById('cover');

const songs=['music','musics\Agar Tum Saath Ho','musics\Baharla Ha Madhumas']

let songindex=0;


//load songs

loadsong(songs[songindex]);

function loadsong(song) {
    title.innerText=song;
    audio.src= `music/${song}.mp3`;
    cover.src= `images/${song}.jpg ;`

}


//play function

function playsong(){
    musicContainer.classlist.add('play');
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classlist.add('fa-pause');
    audio.play();
}


//pause song


function pausesong(){
    musicContainer.classlist.remove('play');
    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classlist.remove('fa-pause');
    audio.pause();
}



//prev function
function prevsong(){
songindex--;;
if (songindex<0){
    songindex=songs.length-1;
}
loadsong(songs[songindex]);
playsong();;

}

//next song

function nextsong(){
    songindex++;;
    if (songindex<songs.length){
        songindex=0;;
    }
    loadsong(songs[songindex]);
    playsong();;
    
    }

    //update progress bar

    function updateprogressbar(e){
        const{duration,CurrentTime}=e.srcElement;
        const progressPercent =(currentTime/duration) *100;
        progress.style.width= `${progressPercent}% ;`
    }
    //setprogress function
function setProgress(){
    const width=this.clientwidth
    const Clicx=e.OffsetX
    const duration=audio.duration



    audio.currentTime =(ClickX/width)* duration;
}

//eventlistner on playbtn

playbtn.addEventListener('click',()=>{
    const isPlaying=musicContainer.classList.contains('play');
    if(isPlaying){
        pausesong();;
    }else{
        playsong();
    }
    });

//change song

prevbtnbtn.addEventListener('click',prevsong);
nextbtn.addEventListener('click',nextsong);

//time,song,update

audio.addEventListener('timeupdate',updateprogress);


 //click on progress

 progress-container.addEventListner('click',setProgress);

 //song end

  audio.addEventListner('ended',nextsong);;
