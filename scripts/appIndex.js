function showGalery() {
    setTimeout(function(){
        document.getElementById("main").style.opacity = "1"
        document.getElementById("card1").classList.add("translateLeft")
        document.getElementById("card2").classList.add("translateRight")
        document.getElementById("card3").classList.add("translateLeft")
        document.getElementById("card4").classList.add("translateRight")
    }, 100);
}
function getScroll() {
    var y = window.scrollY;
    if (y >= 728) {
        showGalery()
    }
}