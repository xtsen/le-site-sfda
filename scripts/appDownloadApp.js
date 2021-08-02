// Element
var downloadBtn = document.getElementById("download-btn");
var repeatBtn = document.getElementById("repeat-btn");
var progressBar = document.querySelector("#progress-bar");
var barContainer = document.querySelector("#bar-container");
    
// Elemnet Value
var progressBarLength = progressBar.style.width;
var barContainerLength = barContainer.style.width;

// Status
var completed = 0;

function download() {

    if (completed == 0) {
        barContainer.classList.add("animation-popup");
        progressBar.style.width = "100%";
        progressBar.style.transition = "5000ms cubic-bezier(0.85, 0, 0.15, 1)";

        setTimeout(completeProgression, 5000);
    } else {

    }

    completed = 1;

}

function completeProgression() {

    barContainer.classList.remove("animation-popup");
    void barContainer.offsetWidth;
    barContainer.classList.add("animation-popdown");

    downloadBtn.style.backgroundColor = "#018f40";
    downloadBtn.style.boxShadow = "0 5px 10px -5px #018f40";
    downloadBtn.setAttribute("disabled", "true");
    setTimeout(function() {
        downloadBtn.classList.add("animation-bounce");
        downloadBtn.innerHTML = "Téléchargé";
        repeatBtn.style.visibility = "visible";
    }, 100);

}

function reset() {

    completed = 0;

    barContainer.classList.remove("animation-popdown");
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";

    downloadBtn.classList.remove("animation-bounce");
    downloadBtn.setAttribute("class", "");
    downloadBtn.setAttribute("style", "");
    downloadBtn.removeAttribute("disabled");
    downloadBtn.innerHTML = '<i class="fas fa-download fa-lg"></i>';

    repeatBtn.style.visibility = "hidden";

}