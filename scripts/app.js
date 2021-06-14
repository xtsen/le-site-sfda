function loader() {
    document.getElementById('loader').style.transform = "scale(0.5)"
    document.getElementById('loader').style.backgroundColor = "transparent";
}
function transitionPage(destination) {
    document.getElementById('loader').style.transform = "scale(20)"
    document.getElementById('loader').style.backgroundColor = "#222";
    
        setTimeout(() => {
            document.location.replace(destination + '.html');
        }, 600);
}
