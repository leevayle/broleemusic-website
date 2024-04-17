
// Prevent context menu where necessary
document.getElementById('pd1').addEventListener('contextmenu',event => event.preventDefault()); // Nav logo
document.getElementById('pd2').addEventListener('contextmenu',event => event.preventDefault());//song play buttons
document.getElementById('pd3').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('pd4').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('pd5').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('pd6').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('pd7').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('pd8').addEventListener('contextmenu',event => event.preventDefault());//song download buttons
document.getElementById('pd9').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('pd10').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('pd11').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('pd12').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('pd13').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('vhnd1').addEventListener('contextmenu',event => event.preventDefault());//Videos home/popular videos
document.getElementById('vhnd2').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('vhnd3').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('vhnd4').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('philly').addEventListener('contextmenu',event => event.preventDefault());//artist images
document.getElementById('tumaini').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('jevy').addEventListener('contextmenu',event => event.preventDefault());
document.getElementById('videodownloadbtn').addEventListener('contextmenu',event => event.preventDefault());

//declaring variables and constants
const menu = document.getElementById('menu-mobile');
const Humbeger = document.getElementById('h-menu');
const menucont = document.getElementById('m-m-c');
const Close = document.getElementById('close-button-mobile-nav');

function VibrateB(){
    vtime = '35';
    navigator.vibrate([vtime]);
}

//Humbeger menu click
    Humbeger.addEventListener('click',()=>{
        VibrateB();
        setTimeout(() => {
            if (menu.style.display==='none'){
                menu.style.display = 'block';
                menucont.style.right = '15px';
            } else if(menu.style.display==='') {
                menu.style.display = 'block';
                menucont.style.right = '15px';
            }else{
                menu.style.display = 'none';
                menucont.style.right = '-500px';
            }
        }, 50);
          
    });

//Close button click
Close.addEventListener('click',()=>{
    VibrateB();
    setTimeout(() => {
        menu.style.display = 'none';
    }, 50);
    
});

//loading handler
const load = document.getElementById('loading');
let width = 0;

function Load(){
    load.style.display = 'block';
    if(width< 100){
        width +=5;
        load.style.width = '${width}%';
        setTimeout(Load,50);
    }
    
    setTimeout(function(){
        load.style.display = 'none';
    },5000);
}

//NOTIFICATIONS
const success = document.getElementById('success');
var successtext = document.getElementById('success-text');
const closesuccess = document.getElementById('closesuccess');
const info = document.getElementById('info');
var infotext = document.getElementById('info-text');
const closeinfo = document.getElementById('closeinfo');
const warning = document.getElementById('warning');
var warningtext = document.getElementById('warning-text');
const closewarning = document.getElementById('closewarning');
const error = document.getElementById('error');
var errortext = document.getElementById('error-text');
const closeerror = document.getElementById('closeerror');
const disptime = '2500';      //timeout for hiding notifications automatically

//success
document.addEventListener('DOMContentLoaded', function () {

    const hideSuccess = () => {
        success.style.display = 'none';
    };
    closesuccess.addEventListener('click', ()=>{
        hideSuccess();
        VibrateB();
    })

    setTimeout(hideSuccess, disptime);

    success.addEventListener('transitionend', function () {
        
            setTimeout(hideSuccess, disptime);
        });
        
});

//warning
document.addEventListener('DOMContentLoaded', function () {

    const hideWarning = () => {
        warning.style.display = 'none';
    };
    closewarning.addEventListener('click', ()=>{
        hideWarning();
        VibrateB();
    })

    setTimeout(hideWarning,disptime);

    warning.addEventListener('transitionend', function () {
        if (warning.style.display === 'block') {
            setTimeout(hideWarning, disptime);
        }
    });
});

//info
document.addEventListener('DOMContentLoaded', function () {

    const hideInfo = () => {
        info.style.display = 'none';
    };
    closeinfo.addEventListener('click', ()=>{
        hideInfo();
        VibrateB();
    })

    setTimeout(hideInfo, disptime);

    info.addEventListener('transitionend', function () {
        if (info.style.display === 'block') {
            setTimeout(hideInfo, disptime);
        }
    });
});

//error
document.addEventListener('DOMContentLoaded', function () {

    const hideError = () => {
        error.style.display = 'none';
    };
    closeerror.addEventListener('click', ()=>{
        VibrateB();
        hideError();
    })

    setTimeout(hideError, disptime);

    error.addEventListener('transitionend', function () {
        if (error.style.display === 'block') {
            setTimeout(hideError, disptime);
        }
    });
});

// Theme change
const style = document.getElementById('stylesheet');
const pcheckbox = document.getElementById('themes');
const mcheckbox = document.getElementById('themes-mobile');
const bg = document.getElementById('bg-home');

//for mobile
function ThemeChange(){
    style.href = mcheckbox.checked ? 'css/d.css' : 'css/l.css';
    document.getElementById('pd8').src = mcheckbox.checked ? "images/icons/download.png" : "images/icons/downloadb.png";
    document.getElementById('pd9').src = mcheckbox.checked ? "images/icons/download.png" : "images/icons/downloadb.png";
    document.getElementById('pd10').src = mcheckbox.checked ? "images/icons/download.png" : "images/icons/downloadb.png";
    document.getElementById('pd11').src = mcheckbox.checked ? "images/icons/download.png" : "images/icons/downloadb.png";
    document.getElementById('pd12').src = mcheckbox.checked ? "images/icons/download.png" : "images/icons/downloadb.png";
    document.getElementById('pd13').src = mcheckbox.checked ? "images/icons/download.png" : "images/icons/downloadb.png";
}


// for pc  
  function ThemeChangeP(){
    style.href = pcheckbox.checked ? 'css/d.css' : 'css/l.css';
    document.getElementById('pd8').src = pcheckbox.checked ? "images/icons/download.png" : "images/icons/downloadb.png";  
    document.getElementById('pd9').src = pcheckbox.checked ? "images/icons/download.png" : "images/icons/downloadb.png"; 
    document.getElementById('pd10').src = pcheckbox.checked ? "images/icons/download.png" : "images/icons/downloadb.png"; 
    document.getElementById('pd11').src = pcheckbox.checked ? "images/icons/download.png" : "images/icons/downloadb.png"; 
    document.getElementById('pd12').src = pcheckbox.checked ? "images/icons/download.png" : "images/icons/downloadb.png"; 
    document.getElementById('pd13').src = pcheckbox.checked ? "images/icons/download.png" : "images/icons/downloadb.png"; 
}

function ComingSoon(){
    infotext.textContent = 'Coming soon!';
    info.style.display = 'block';
    setTimeout(()=>{
        info.style.display = 'none';
    },2000);
};


/*  speed check
const startTime = new Date().getTime();

let progress = 0;
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://127.0.0.1:5500/audio/singles/In%20christ%20alone.mp3');
xhr.responseType = 'blob';
xhr.onprogress = function(event) {
  progress = event.loaded / event.total;
};
xhr.onload = function() {
  const endTime = new Date().getTime();
  const timeDiff = endTime - startTime;
  const fileSize = xhr.response.size;
  const speed = (fileSize / timeDiff) * 1000; // Calculate speed in bytes per second
  console.log('Download speed:', speed + ' bytes/s');
  if(speed<=100000000){
    errortext.textContent = 'Slow network detected!';
    error.style.display = 'block';
}
};
xhr.send(); */



//Top videos handler
/*
var imgIndex = 0;
var images = [
  'images/albums/a.gif',
  'images/albums/a-1.gif',
  'images/albums/a-2.gif',
  'images/albums/a-3.gif',
  'images/albums/a-4.gif',
  'images/albums/a-5.gif',
  'images/albums/a-6.gif',
  'images/albums/a-7.gif',
  'images/albums/a-8.gif'
];

var imgElement = document.getElementsByClassName('topvids');
var prev = document.getElementById('vh1');
var next = document.getElementById('vh3');

function updateImage() {
  imgElement.src = images[imgIndex];
}

function nextImg() {
  imgIndex = (imgIndex + 1) % images.length;
  updateImage();
}

function prevImg() {
  imgIndex = (imgIndex - 1 + images.length) % images.length;
  updateImage();
}

next.addEventListener('click', () => {
  console.log('Next');
  nextImg();
});

prev.addEventListener('click', () => {
  console.log('Prev');
  prevImg();
});

// Initial image update
updateImage(); */