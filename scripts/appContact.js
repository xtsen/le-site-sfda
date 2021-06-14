function getScroll() {
    var y = window.scrollY;
    if (y >= 720) {
        document.getElementById("navbar").style.backgroundColor = "#222";
        document.getElementById("titleNavBar").style.color = "#fff";
        document.getElementById("navBarLink").style.color = "#fff";
        document.getElementById("navBarLink2").style.color = "#fff";
        document.getElementById("navBarLink3").style.color = "#fff";
        document.getElementById("navBarLink4").style.color = "#fff";
        document.getElementById("navBarLink5").style.color = "#fff";
    }else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("titleNavBar").style.color = "#222";
        document.getElementById("navBarLink").style.color = "#222";
        document.getElementById("navBarLink2").style.color = "#222";
        document.getElementById("navBarLink3").style.color = "#222";
        document.getElementById("navBarLink4").style.color = "#222";
        document.getElementById("navBarLink5").style.color = "#222";
    }
}