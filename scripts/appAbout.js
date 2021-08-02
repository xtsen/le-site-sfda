function getScroll() {
    var y = window.scrollY;
    if (y >= 720) {
        document.getElementById("body").style.backgroundColor = "#000";
    }else {
        document.getElementById("body").style.backgroundColor = "#fff";
    }
}
function inviteToDiscord() {
    window.location.href = "https://discord.gg/yJyYWv2Ydh"
}