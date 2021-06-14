const images = ['res/backgrounds/backgroundEveryweb.png', 'res/backgrounds/backgroundSFDALove.png', 'res/backgrounds/backgroundEkip.png', 'res/backgrounds/backgroundHelpME.png', 'res/backgrounds/backgroundWorkout.png']
const imagesLength = images.length;

function checking() {

    document.getElementById("imgSiteNext").setAttribute('src', images[imagesLength-1]);
    document.getElementById("imgSitePrevious").setAttribute('src', images[1]);
}
function checkWidth() {
    wid = window.screen.width

    if (wid < 768) {
        return 'phone'
    }else{
        return 0
    }
}

// Slider

const websites = ['Everyweb', 'SFDA love', 'Ekip', 'Help me', 'Workout']
const projectDuration = ['100h', '60h', '20h', '10h', '4-5h']
const links = ['https://xtsen.github.io/Everyweb/', 'https://xtsen.github.io/SFDA-love/', 'http://so667.epizy.com/', 'http://helpme.byethost8.com/index.html', 'https://xtsen.github.io/Workout/']

function verifCurrent() {
    current = document.getElementById('siteName').innerText
    i=0;
    while (current != websites[i]) {
        i++;
    }
    return nextSite = i+1;
}

function nextWebsite() {

    currentIndexWebsite = verifCurrent()
    
    if (currentIndexWebsite === 5 ) {
        currentIndexWebsite = 0;
    }
    document.getElementById("siteName").innerText = websites[currentIndexWebsite];
    document.getElementById("timeToDo").innerText = projectDuration[currentIndexWebsite];

    animationNext()
}
function animationNext() {
    document.getElementById("siteName").classList.add("animNext");
    document.getElementById("timeToDo").classList.add("animNext");
    document.getElementById("imgSite").classList.add("animNext");
    if (checkWidth() === 'phone') {
        console.log('taille de l\'ecran trop petite');
    }else{
        console.log(currentIndexWebsite);
        if (currentIndexWebsite == 0) {
            setTimeout(function(){ document.getElementById("imgSiteNext").setAttribute('src', images[4]) }, 500);
        }else{
            setTimeout(function(){ document.getElementById("imgSiteNext").setAttribute('src', images[currentIndexWebsite-1]) }, 500);
        }
        if (currentIndexWebsite == 4) {
            setTimeout(function(){ document.getElementById("imgSitePrevious").setAttribute('src', images[0]) }, 500);
        }else{
            setTimeout(function(){ document.getElementById("imgSitePrevious").setAttribute('src', images[currentIndexWebsite+1]) }, 500);
        }
        
        setTimeout(function(){ document.getElementById("imgSite").setAttribute('src', images[currentIndexWebsite]) }, 500);
    }
    
    setTimeout(function(){ document.getElementById("siteName").classList.remove("animNext"); }, 1000);
    setTimeout(function(){ document.getElementById("timeToDo").classList.remove("animNext"); }, 1000);
    setTimeout(function(){ document.getElementById("imgSite").classList.remove("animNext"); }, 1000);
}

function linkwebsite() {
    linkSite = verifCurrent()-1;

    document.location.href = links[linkSite];
}