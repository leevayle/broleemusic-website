// Declaring varriables
const albumNew = document.getElementById('albumnew');
const audioNew = document.getElementById('audionew');
const spin = 'spin 10s infinite linear';
const video = document.getElementById('video');
const videotitle = document.getElementById('videotitle');
const videoartist = document.getElementById('videoartist');
const videoartisttitle = document.getElementById('videoartisttitle');
const videodownloadlink = document.getElementById('videodownloadlink');

//Play, pause and stop buttons

    //Resetting the play animes
    function ResetAnime(){
        document.getElementById('playanime1').style.display = 'none';
        document.getElementById('playanime2').style.display = 'none';
        document.getElementById('playanime3').style.display = 'none';
        document.getElementById('playanime4').style.display = 'none';
        document.getElementById('playanime5').style.display = 'none';
        document.getElementById('playanime6').style.display = 'none';
    };

    //Stop buttons
    document.getElementById('fpp3').addEventListener('click', ()=> {       

        audioNew.pause();
        audioNew.src = '';
        albumNew.style.animation = '';
        ResetAnime();
        document.getElementById('albumnew').src = 'images/albums/static/disk.png';
        
    });
    document.getElementById('apbtns').addEventListener('click', ()=> {       

        audioNew.pause();
        audioNew.src = '';
        albumNew.style.animation = '';
        ResetAnime();
        document.getElementById('albumnew').src = 'images/albums/static/disk.png';
        
    });
    
    //Pause buttons
    document.getElementById('fpp2').addEventListener('click',()=> {
        if(audioNew.paused){       
            albumNew.style.animation = '';     
            console.log('Audio not playing'); // notif
        } else{
            audioNew.pause();
            albumNew.style.animation = '';
            console.log('Paused'); //notif
        }

    });
    document.getElementById('apbtnps').addEventListener('click',()=> {
        if(audioNew.paused){       
            albumNew.style.animation = '';     
            console.log('Audio not playing'); // notif
        } else{
            audioNew.pause();
            albumNew.style.animation = '';
            console.log('Paused'); //notif
        }

    });

    //Play buttons
    document.getElementById('fpp1').addEventListener('click', ()=> {
        if(audioNew.paused){            
            audioNew.play();   
            albumNew.style.animation = spin;
            console.log('Now Playing'); // notif
        }

    });
    document.getElementById('apbtnp').addEventListener('click', ()=> {
        if(audioNew.paused){            
            audioNew.play();
            albumNew.style.animation = spin;
            console.log('Now Playing'); // notif
        }

    });
    
    //Stop animation when audio ends
    audioNew.addEventListener('ended',()=>{
        ResetAnime();
        albumNew.style.animation = '';
    });
    
    //Listen for a pause and stop animating
    audioNew.addEventListener('pause',()=>{
        albumNew.style.animation = '';
    });

    //  PAUSE VIDEO
function pauseVideo(){
    if(video.paused){

    }else{
        video.pause();
    }
}

//pause before playing audio/video
video.addEventListener('play', ()=>{
    pauseAudio();
});
audioNew.addEventListener('play', ()=>{
    pauseVideo();
});


// TOP FAVOURITES _______________________________
//changing the new audio varriables on click event
function CA1(){
    document.getElementById('albumnew').src = document.getElementById('album-old1').src;
    audioNew.src = document.getElementById('audio-old1').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
    ResetAnime();
    document.getElementById('playanime1').style.display = 'block';
}

function CA2(){
    document.getElementById('albumnew').src = document.getElementById('album-old2').src;
    audioNew.src = document.getElementById('audio-old2').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
    ResetAnime();
    document.getElementById('playanime2').style.display = 'block';
}

function CA3(){
    document.getElementById('albumnew').src = document.getElementById('album-old3').src;
    audioNew.src = document.getElementById('audio-old3').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
    ResetAnime();
    document.getElementById('playanime3').style.display = 'block';
}

function CA4(){
    document.getElementById('albumnew').src = document.getElementById('album-old4').src;
    audioNew.src = document.getElementById('audio-old4').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
    ResetAnime();
    document.getElementById('playanime4').style.display = 'block';
}

function CA5(){
    document.getElementById('albumnew').src = document.getElementById('album-old5').src;
    audioNew.src = document.getElementById('audio-old5').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
    ResetAnime();
    document.getElementById('playanime5').style.display = 'block';
}

function CA6(){
    document.getElementById('albumnew').src = document.getElementById('album-old6').src;
    audioNew.src = document.getElementById('audio-old6').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
    ResetAnime();
    document.getElementById('playanime6').style.display = 'block';
}

// Albums audio player ______________
//Making the divs that carry songs visible before deciding which one to hide
function resetDivs(){
    document.getElementById('fps1').style.display = 'block';
    document.getElementById('fps2').style.display = 'block';
    document.getElementById('fps3').style.display = 'block';
    document.getElementById('fps4').style.display = 'block';
    document.getElementById('fps5').style.display = 'block';
    document.getElementById('fps6').style.display = 'block';
    document.getElementById('fps7').style.display = 'block';
    document.getElementById('fps8').style.display = 'block';
    document.getElementById('fps9').style.display = 'block';
    document.getElementById('fps10').style.display = 'block';
};

document.getElementById('albumpic1').addEventListener('click', ()=>{
    resetDivs();
    //updating the title and song names
    document.getElementById('albums-blur-back').style.display = 'block';
    document.getElementById('aptitle').textContent = 'Only believe | 2022';
    document.getElementById('fpp-1').textContent = 'Only believe all things are possible';
    document.getElementById('fpp-2').textContent = 'One day at a time';
    document.getElementById('fpp-3').textContent = 'Ociens - by Hillsong';
    document.getElementById('fpp-4').textContent = 'Jesus paid it all';
    document.getElementById('fpp-5').textContent = 'Great is thy faithfulness';
    document.getElementById('fpp-6').textContent = 'Friendship with Jesus';
    document.getElementById('fpp-7').textContent = 'Faith in God can move mountains';
    document.getElementById('fpp-8').textContent = 'Bigger than anything';
    document.getElementById('fpp-9').textContent = 'Amazing grace shall always be my song';
    document.getElementById('fpp-10').textContent = 'A few more years';

    //updating links
    document.getElementById('fpph-1').textContent = 'audio/only believe/only believe instrumental.mp3';
    document.getElementById('fpph-2').textContent = 'audio/only believe/One day at a time instrumental.mp3';
    document.getElementById('fpph-3').textContent = 'audio/only believe/Ociens.mp3';
    document.getElementById('fpph-4').textContent = 'audio/only believe/Jesus paid it all.mp3';
    document.getElementById('fpph-5').textContent = 'audio/only believe/Great is thy faithfulness instrumental.mp3';
    document.getElementById('fpph-6').textContent = 'audio/only believe/friendship with jesus.mp3';
    document.getElementById('fpph-7').textContent = 'audio/only believe/Faith in God can mov a mighty mountain.mp3';
    document.getElementById('fpph-8').textContent = 'audio/only believe/Bigger than anything.mp3';
    document.getElementById('fpph-9').textContent = 'audio/only believe/amazing grace shall always be my song instrumental.mp3';
    document.getElementById('fpph-10').textContent = 'audio/only believe/a few more years shall roll re-mastered.mp3';

    //album arts
    document.getElementById('fppa-1').textContent = 'images/albums/static/hd/Only believe album art.png';
    document.getElementById('fppa-2').textContent = 'images/albums/static/hd/Only believe album art.png';
    document.getElementById('fppa-3').textContent = 'images/albums/static/hd/Only believe album art.png';
    document.getElementById('fppa-4').textContent = 'images/albums/static/hd/Only believe album art.png';
    document.getElementById('fppa-5').textContent = 'images/albums/static/hd/Only believe album art.png';
    document.getElementById('fppa-6').textContent = 'images/albums/static/hd/Only believe album art.png';
    document.getElementById('fppa-7').textContent = 'images/albums/static/hd/Only believe album art.png';
    document.getElementById('fppa-8').textContent = 'images/albums/static/hd/Only believe album art.png';
    document.getElementById('fppa-9').textContent = 'images/albums/static/hd/Only believe album art.png';
    document.getElementById('fppa-10').textContent = 'images/albums/static/hd/Only believe album art.png';
});

document.getElementById('albumpic2').addEventListener('click', ()=>{
    resetDivs();
    //updating the title and song names
    document.getElementById('albums-blur-back').style.display = 'block';
    document.getElementById('aptitle').textContent = 'It is no secret | 2023';
    document.getElementById('fpp-1').textContent = 'It is no secret what God can do';
    document.getElementById('fpp-2').textContent = 'He-s still working on me';
    document.getElementById('fpp-3').textContent = 'Ancient words';
    document.getElementById('fps4').style.display = 'none';
    document.getElementById('fps5').style.display = 'none';
    document.getElementById('fpp-6').textContent = 'The longer i serve him';
    document.getElementById('fpp-7').textContent = 'Because he lives';
    document.getElementById('fpp-8').textContent = 'Beyond the sunset';
    document.getElementById('fps9').style.display = 'none';
    document.getElementById('fps10').style.display = 'none';

    //updating links 
    document.getElementById('fpph-1').textContent = 'audio/it is no seccret/It is no secret.mp3';
    document.getElementById('fpph-2').textContent = 'audio/it is no seccret/He-s still working on me.mp3';
    document.getElementById('fpph-3').textContent = 'audio/it is no seccret/Ancient words.mp3';
    document.getElementById('fpph-4').textContent = '';
    document.getElementById('fpph-5').textContent = '';
    document.getElementById('fpph-6').textContent = 'audio/it is no seccret/the longer i serve Him.mp3';
    document.getElementById('fpph-7').textContent = 'audio/it is no seccret/Because he lives.mp3';
    document.getElementById('fpph-8').textContent = 'audio/it is no seccret/Beyond the sunset.mp3';
    document.getElementById('fpph-9').textContent = '';
    document.getElementById('fpph-10').textContent = '';

    //album arts
    document.getElementById('fppa-1').textContent = 'images/albums/static/hd/Picture3.jpg';
    document.getElementById('fppa-2').textContent = 'images/albums/static/hd/Picture3.jpg';
    document.getElementById('fppa-3').textContent = 'images/albums/static/hd/Picture3.jpg';
    document.getElementById('fppa-4').textContent = 'images/albums/static/hd/Picture3.jpg';
    document.getElementById('fppa-5').textContent = 'images/albums/static/hd/Picture3.jpg';
    document.getElementById('fppa-6').textContent = 'images/albums/static/hd/Picture3.jpg';
    document.getElementById('fppa-7').textContent = 'images/albums/static/hd/Picture3.jpg';
    document.getElementById('fppa-8').textContent = 'images/albums/static/hd/Picture3.jpg';
    document.getElementById('fppa-9').textContent = 'images/albums/static/hd/Picture3.jpg';
    document.getElementById('fppa-10').textContent = 'images/albums/static/hd/Picture3.jpg';
});

document.getElementById('albumpic3').addEventListener('click', ()=>{
    resetDivs();
    //updating the title and song names
    document.getElementById('albums-blur-back').style.display = 'block';
    document.getElementById('aptitle').textContent = 'At the cross | 2021/22';
    document.getElementById('fpp-1').textContent = 'At the cross';
    document.getElementById('fpp-2').textContent = 'Land of cloudless day';
    document.getElementById('fps3').style.display = 'none';
    document.getElementById('fps4').style.display = 'none';
    document.getElementById('fps5').style.display = 'none';
    document.getElementById('fpp-6').textContent = 'As the deer';
    document.getElementById('fpp-7').textContent = 'He knows my name';
    document.getElementById('fps8').style.display = 'none';
    document.getElementById('fps9').style.display = 'none';
    document.getElementById('fps10').style.display = 'none';

    //updating links 
    document.getElementById('fpph-1').textContent = 'audio/at the cross/At the cross where i first saw the light.mp3';
    document.getElementById('fpph-2').textContent = 'audio/at the cross/Land-of-cloudless-day.mp3';
    document.getElementById('fpph-6').textContent = 'audio/at the cross/as the deer bro lee vayle.mp3';
    document.getElementById('fpph-7').textContent = 'audio/at the cross/He nows my name Lee.mp3';

    //album arts
    document.getElementById('fppa-1').textContent = 'images/albums/static/hd/at the cross.png';
    document.getElementById('fppa-2').textContent = 'images/albums/static/hd/at the cross.png';
    document.getElementById('fppa-6').textContent = 'images/albums/static/hd/at the cross.png';
    document.getElementById('fppa-7').textContent = 'images/albums/static/hd/at the cross.png';
});

document.getElementById('albumpic4').addEventListener('click', ()=>{
    resetDivs();
    //updating the title and song names
    document.getElementById('albums-blur-back').style.display = 'block';
    document.getElementById('aptitle').textContent = 'Angel Band | 2023';
    document.getElementById('fpp-1').textContent = 'Angel band';
    document.getElementById('fps2').style.display = 'none';
    document.getElementById('fps3').style.display = 'none';
    document.getElementById('fps4').style.display = 'none';
    document.getElementById('fps5').style.display = 'none';
    document.getElementById('fpp-6').textContent = 'How beautiful heaven must be';
    document.getElementById('fps7').style.display = 'none';
    document.getElementById('fps8').style.display = 'none';
    document.getElementById('fps9').style.display = 'none';
    document.getElementById('fps10').style.display = 'none';

    //updating links 
    document.getElementById('fpph-1').textContent = 'audio/angel band/Angel band Tumaini and lee.mp3';
    document.getElementById('fpph-6').textContent = 'audio/angel band/How beautiful Heaven must be.mp3';

    //album arts
    document.getElementById('fppa-1').textContent = 'images/albums/static/hd/Angel band.jpg';
    document.getElementById('fppa-6').textContent = 'images/albums/static/hd/Angel band.jpg';
});

document.getElementById('albumpic5').addEventListener('click', ()=>{
    resetDivs();
    //updating the title and song names
    document.getElementById('albums-blur-back').style.display = 'block';
    document.getElementById('aptitle').textContent = 'Remind me | 2023';
    document.getElementById('fpp-1').textContent = 'Remind me';
    document.getElementById('fps2').style.display = 'none';
    document.getElementById('fps3').style.display = 'none';
    document.getElementById('fps4').style.display = 'none';
    document.getElementById('fps5').style.display = 'none';
    document.getElementById('fpp-6').textContent = 'This world is not my home';
    document.getElementById('fps7').style.display = 'none';
    document.getElementById('fps8').style.display = 'none';
    document.getElementById('fps9').style.display = 'none';
    document.getElementById('fps10').style.display = 'none';

    //updating links 
    document.getElementById('fpph-1').textContent = 'audio/remind me/Remind me.mp3';
    document.getElementById('fpph-6').textContent = 'audio/remind me/this wrld is not my home.mp3';

    //album arts
    document.getElementById('fppa-1').textContent = 'images/albums/static/hd/remind me.jpg';
    document.getElementById('fppa-6').textContent = 'images/albums/static/hd/remind me.jpg';
});

document.getElementById('albumpic6').addEventListener('click', ()=>{
    resetDivs();
    //updating the title and song names
    document.getElementById('albums-blur-back').style.display = 'block';
    document.getElementById('aptitle').textContent = 'Mercy worth | 2023';
    document.getElementById('fpp-1').textContent = 'Ucio ni Jesu';
    document.getElementById('fpp-2').textContent = 'The longer i serve Him';
    document.getElementById('fps3').style.display = 'none';
    document.getElementById('fps4').style.display = 'none';
    document.getElementById('fps5').style.display = 'none';
    document.getElementById('fpp-6').textContent = 'Coat of many colors';
    document.getElementById('fpp-7').textContent = 'Alone and forsaken';
    document.getElementById('fps8').style.display = 'none';
    document.getElementById('fps9').style.display = 'none';
    document.getElementById('fps10').style.display = 'none';

    //updating links 
    document.getElementById('fpph-1').textContent = 'audio/mercy worth/ucio ni jesu.mp3';
    document.getElementById('fpph-2').textContent = 'audio/mercy worth/The longer i serve Him.mp3';
    document.getElementById('fpph-6').textContent = 'audio/mercy worth/Coat of many colors.mp3';
    document.getElementById('fpph-7').textContent = 'audio/mercy worth/A song - Mercy Worth.mp3';

    //album arts
    document.getElementById('fppa-1').textContent = 'images/albums/static/hd/MERCY.jpg';
    document.getElementById('fppa-2').textContent = 'images/albums/static/hd/MERCY.jpg';
    document.getElementById('fppa-6').textContent = 'images/albums/static/hd/MERCY.jpg';
    document.getElementById('fppa-7').textContent = 'images/albums/static/hd/MERCY.jpg';
});

document.getElementById('albumpic7').addEventListener('click', ()=>{
    resetDivs();
    //updating the title and song names
    document.getElementById('albums-blur-back').style.display = 'block';
    document.getElementById('aptitle').textContent = 'Single songs | -23';
    document.getElementById('fpp-1').textContent = 'Kwa mji wa mwangaza';
    document.getElementById('fpp-2').textContent = 'Face to face';
    document.getElementById('fpp-3').textContent = 'In christ alone';
    document.getElementById('fpp-4').textContent = 'My redeemer lives';
    document.getElementById('fpp-5').textContent = 'Long black train';
    document.getElementById('fpp-6').textContent = 'There is a fountain';
    document.getElementById('fpp-7').textContent = 'Look for me';
    document.getElementById('fpp-8').textContent = 'I-m in His hands';
    document.getElementById('fpp-9').textContent = 'Amazing grace';
    document.getElementById('fpp-10').textContent = 'You are my all in all';

    //updating links
    document.getElementById('fpph-1').textContent = 'audio/singles/kwa mji wa mwangaza.mp3';
    document.getElementById('fpph-2').textContent = 'audio/singles/Face to face.mp3';
    document.getElementById('fpph-3').textContent = 'audio/singles/In christ alone.mp3';
    document.getElementById('fpph-4').textContent = 'audio/singles/Faith, my reedemer lives.mp3';
    document.getElementById('fpph-5').textContent = 'audio/singles/Long black train.mp3';
    document.getElementById('fpph-6').textContent = 'audio/singles/There is a fountain.mp3';
    document.getElementById('fpph-7').textContent = 'audio/singles/Look for me- sis.Naomi and sisters.mp3';
    document.getElementById('fpph-8').textContent = 'audio/singles/IN HIS HANDS DAVID.mp3';
    document.getElementById('fpph-9').textContent = 'audio/singles/amazing grace shall always be my song of praise.mp3';
    document.getElementById('fpph-10').textContent = 'audio/singles/you are my all in all.mp3';

    //album arts
    document.getElementById('fppa-1').textContent = 'images/albums/static/hd/kwa mji.jpg';
    document.getElementById('fppa-2').textContent = 'images/albums/static/hd/face to face.jpg';
    document.getElementById('fppa-3').textContent = 'images/albums/static/hd/ica.jpg';
    document.getElementById('fppa-4').textContent = 'images/albums/static/hd/faith o.jpg';
    document.getElementById('fppa-5').textContent = 'images/albums/static/hd/long black train.jpg';
    document.getElementById('fppa-6').textContent = 'images/albums/static/hd/there is a fountain.jpg';
    document.getElementById('fppa-7').textContent = 'images/albums/static/hd/Look for me.jpg';
    document.getElementById('fppa-8').textContent = 'images/albums/static/hd/in his hands.jpg';
    document.getElementById('fppa-9').textContent = 'images/albums/static/hd/amazing grace.jpg';
    document.getElementById('fppa-10').textContent = 'images/albums/static/hd/you are my all in all album art.jpg';
});

document.getElementById('albumpic8').addEventListener('click', ()=>{
    resetDivs();
    //updating the title and song names
    document.getElementById('albums-blur-back').style.display = 'block';
    document.getElementById('aptitle').textContent = 'Coming soon | samples';
    document.getElementById('fpp-1').textContent = 'How great tou art';
    document.getElementById('fpp-2').textContent = 'Show me your ways Lord';
    document.getElementById('fps3').style.display = 'none';
    document.getElementById('fps4').style.display = 'none';
    document.getElementById('fps5').style.display = 'none';
    document.getElementById('fpp-6').textContent = 'Love lifted me';
    document.getElementById('fpp-7').textContent = 'What a beautiful name it is';
    document.getElementById('fps8').style.display = 'none';
    document.getElementById('fps9').style.display = 'none';
    document.getElementById('fps10').style.display = 'none';

    //updating links 
    document.getElementById('fpph-1').textContent = 'audio/coming soon/how great thou art sample.mp3';
    document.getElementById('fpph-2').textContent = 'audio/coming soon/show me your ways sample.mp3';
    document.getElementById('fpph-6').textContent = 'audio/coming soon/love lifted me sample.mp3';
    document.getElementById('fpph-7').textContent = 'audio/coming soon/what a beautiful name sample.mp3';

    //album arts
    document.getElementById('fppa-1').textContent = 'images/albums/static/15.jpg';
    document.getElementById('fppa-2').textContent = 'images/albums/static/15.jpg';
    document.getElementById('fppa-6').textContent = 'images/albums/static/15.jpg';
    document.getElementById('fppa-7').textContent = 'images/albums/static/15.jpg';
});


//closing action
document.getElementById('albums-player-close').addEventListener('click', ()=>{
    VibrateB();
    document.getElementById('albums-blur-back').style.display = 'none';
});



// Handling te click events of the album player
function Fps1(){
    albumNew.src = document.getElementById('fppa-1').textContent;
    document.getElementById('albumplayeralbumart').src = document.getElementById('fppa-1').textContent;
    document.getElementById('albumplayerdownload').href = document.getElementById('fpph-1').textContent;
    audioNew.src = document.getElementById('fpph-1').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
};

function Fps2(){
    albumNew.src = document.getElementById('fppa-2').textContent;
    document.getElementById('albumplayeralbumart').src = document.getElementById('fppa-2').textContent;
    document.getElementById('albumplayerdownload').href = document.getElementById('fpph-2').textContent;
    audioNew.src = document.getElementById('fpph-2').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
};

function Fps3(){
    albumNew.src = document.getElementById('fppa-3').textContent;
    document.getElementById('albumplayeralbumart').src = document.getElementById('fppa-3').textContent;
    document.getElementById('albumplayerdownload').href = document.getElementById('fpph-3').textContent;
    audioNew.src = document.getElementById('fpph-3').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
};

function Fps4(){
    albumNew.src = document.getElementById('fppa-4').textContent;
    document.getElementById('albumplayeralbumart').src = document.getElementById('fppa-4').textContent;
    document.getElementById('albumplayerdownload').href = document.getElementById('fpph-4').textContent;
    audioNew.src = document.getElementById('fpph-4').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
};

function Fps5(){
    albumNew.src = document.getElementById('fppa-5').textContent;
    document.getElementById('albumplayeralbumart').src = document.getElementById('fppa-5').textContent;
    document.getElementById('albumplayerdownload').href = document.getElementById('fpph-5').textContent;
    audioNew.src = document.getElementById('fpph-5').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
};

function Fps6(){
    albumNew.src = document.getElementById('fppa-6').textContent;
    document.getElementById('albumplayeralbumart').src = document.getElementById('fppa-6').textContent;
    document.getElementById('albumplayerdownload').href = document.getElementById('fpph-6').textContent;
    audioNew.src = document.getElementById('fpph-6').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
};

function Fps7(){
    albumNew.src = document.getElementById('fppa-7').textContent;
    document.getElementById('albumplayeralbumart').src = document.getElementById('fppa-7').textContent;
    document.getElementById('albumplayerdownload').href = document.getElementById('fpph-7').textContent;
    audioNew.src = document.getElementById('fpph-7').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
};

function Fps8(){
    albumNew.src = document.getElementById('fppa-8').textContent;
    document.getElementById('albumplayeralbumart').src = document.getElementById('fppa-8').textContent;
    document.getElementById('albumplayerdownload').href = document.getElementById('fpph-8').textContent;
    audioNew.src = document.getElementById('fpph-8').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
};

function Fps9(){
    albumNew.src = document.getElementById('fppa-9').textContent;
    document.getElementById('albumplayeralbumart').src = document.getElementById('fppa-9').textContent;
    document.getElementById('albumplayerdownload').href = document.getElementById('fpph-9').textContent;
    audioNew.src = document.getElementById('fpph-9').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
};

function Fps10(){
    albumNew.src = document.getElementById('fppa-10').textContent;
    document.getElementById('albumplayeralbumart').src = document.getElementById('fppa-10').textContent;
    document.getElementById('albumplayerdownload').href = document.getElementById('fpph-10').textContent;
    audioNew.src = document.getElementById('fpph-10').textContent;
    pauseVideo();
    audioNew.play();
    albumNew.style.animation = spin;
};

//  Pause audio
function pauseAudio(){
    if(audioNew.paused){

    }else{
        audioNew.pause();
    }
}
//Vid 1
document.getElementById('vid1').addEventListener('click', ()=>{
    video.src = 'videos/goodness of God Jevy_Lee.mp4';
    videotitle.textContent = document.getElementById('vid1title').textContent;
    videoartist.src = document.getElementById('vid1artist').src;
    videoartisttitle.textContent = document.getElementById('vid1artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    //stop audio  before playing video
    pauseAudio();
    video.play();
});
document.getElementById('vhnd4').addEventListener('click', ()=>{
    video.src = 'videos/goodness of God Jevy_Lee.mp4';
    videotitle.textContent = document.getElementById('vid1title').textContent;
    videoartist.src = document.getElementById('vid1artist').src;
    videoartisttitle.textContent = document.getElementById('vid1artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    //stop audio  before playing video
    pauseAudio();
    video.play();
});

//Vid 2
document.getElementById('vid2').addEventListener('click', ()=>{
    video.src = 'videos/Seek Ye first the kingdom.mp4';
    videotitle.textContent = document.getElementById('vid2title').textContent;
    videoartist.src = document.getElementById('vid2artist').src;
    videoartisttitle.textContent = document.getElementById('vid2artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});
document.getElementById('vhnd2').addEventListener('click', ()=>{
    video.src = 'videos/Seek Ye first the kingdom.mp4';
    videotitle.textContent = document.getElementById('vid2title').textContent;
    videoartist.src = document.getElementById('vid2artist').src;
    videoartisttitle.textContent = document.getElementById('vid2artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});

//Vid 3
document.getElementById('vid3').addEventListener('click', ()=>{
    video.src = 'videos/what a day - phil - f.mp4';
    videotitle.textContent = document.getElementById('vid3title').textContent;
    videoartist.src = document.getElementById('vid3artist').src;
    videoartisttitle.textContent = document.getElementById('vid3artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});
document.getElementById('vhnd3').addEventListener('click', ()=>{
    video.src = 'videos/what a day - phil - f.mp4';
    videotitle.textContent = document.getElementById('vid3title').textContent;
    videoartist.src = document.getElementById('vid3artist').src;
    videoartisttitle.textContent = document.getElementById('vid3artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});

//Vid 4
document.getElementById('vid4').addEventListener('click', ()=>{
    video.src = 'videos/you are my all in all.mp4';
    videotitle.textContent = document.getElementById('vid4title').textContent;
    videoartist.src = document.getElementById('vid4artist').src;
    videoartisttitle.textContent = document.getElementById('vid4artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});

//Vid 5
document.getElementById('vid5').addEventListener('click', ()=>{
    video.src = 'videos/when i survey-Albert.mp4';
    videotitle.textContent = document.getElementById('vid5title').textContent;
    videoartist.src = document.getElementById('vid5artist').src;
    videoartisttitle.textContent = document.getElementById('vid5artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});

//Vid 6
document.getElementById('vid6').addEventListener('click', ()=>{
    video.src = 'videos/There is a fountain p.mp4';
    videotitle.textContent = document.getElementById('vid6title').textContent;
    videoartist.src = document.getElementById('vid6artist').src;
    videoartisttitle.textContent = document.getElementById('vid6artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});
//HOME TILE FOR THE SAME VIDEO
document.getElementById('vhnd1').addEventListener('click', ()=>{
    video.src = 'videos/There is a fountain p.mp4';
    videotitle.textContent = document.getElementById('vid6title').textContent;
    videoartist.src = document.getElementById('vid6artist').src;
    videoartisttitle.textContent = document.getElementById('vid6artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});

//Vid 7
document.getElementById('vid7').addEventListener('click', ()=>{
    video.src = 'videos/are you she the bride of the last days.mp4';
    videotitle.textContent = document.getElementById('vid7title').textContent;
    videoartist.src = document.getElementById('vid7artist').src;
    videoartisttitle.textContent = document.getElementById('vid7artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});

//Vid 8
document.getElementById('vid8').addEventListener('click', ()=>{
    video.src = 'videos/Ucio ni jesu - mercy worth.mp4';
    videotitle.textContent = document.getElementById('vid8title').textContent;
    videoartist.src = document.getElementById('vid8artist').src;
    videoartisttitle.textContent = document.getElementById('vid8artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});

//Vid 9
document.getElementById('vid9').addEventListener('click', ()=>{
    video.src = 'videos/All is well phil, faithh and lee.mp4';
    videotitle.textContent = document.getElementById('vid9title').textContent;
    videoartist.src = document.getElementById('vid9artist').src;
    videoartisttitle.textContent = document.getElementById('vid9artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});

//Vid 10
document.getElementById('vid10').addEventListener('click', ()=>{
    video.src = 'videos/land of cloudless day.mp4';
    videotitle.textContent = document.getElementById('vid10title').textContent;
    videoartist.src = document.getElementById('vid10artist').src;
    videoartisttitle.textContent = document.getElementById('vid10artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});

//Vid 11
document.getElementById('vid11').addEventListener('click', ()=>{
    video.src = 'videos/Mercy Worth - coat of many colors.mp4';
    videotitle.textContent = document.getElementById('vid11title').textContent;
    videoartist.src = document.getElementById('vid11artist').src;
    videoartisttitle.textContent = document.getElementById('vid11artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});

//Vid 12
document.getElementById('vid12').addEventListener('click', ()=>{
    video.src = 'videos/In christ alone_my_hope_is_found.mp4';
    videotitle.textContent = document.getElementById('vid12title').textContent;
    videoartist.src = document.getElementById('vid12artist').src;
    videoartisttitle.textContent = document.getElementById('vid12artisttitle').textContent;
    videodownloadlink.href = video.src;
    videodownloadlink.download = video.src;
    document.getElementById('videohref').click();

    pauseAudio();
    video.play();
});