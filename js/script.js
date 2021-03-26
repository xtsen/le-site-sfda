function allWebSite() {
    document.getElementById("showAllProjects").className = "visible";
}
function onlyPublished() {
    document.getElementById("showAllProjects").className = "invisible";
}
function changeColor1() {
    document.getElementById("bodyColor").className = "ColorDiv1";
}
function changeColor2() {
    document.getElementById("bodyColor").className = "ColorDiv2";
}
function changeColor3() {
    document.getElementById("bodyColor").className = "ColorDiv3";
}
function changeColor4() {
    document.getElementById("bodyColor").className = "ColorDiv4";
}
function changeColor5() {
    document.getElementById("bodyColor").className = "ColorDiv5";
}
function changeColor6() {
    document.getElementById("bodyColor").className = "ColorDiv6";
}
function setBackground() {
    document.addEventListener("DOMContentLoaded", changeColor1(),{
    });
}