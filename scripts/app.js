function loader() {
    document.getElementById('loader').style.transform = "scale(0.5)"
    document.getElementById('loader').style.backgroundColor = "transparent";
    setTimeout(() => {
        document.getElementById('loader').style.display = "none";
    }, 500);
}
function transitionPage(destination) {
    document.getElementById('loader').style.display = "block";
    setTimeout(() => {
        document.getElementById('loader').style.transform = "scale(20)"
        document.getElementById('loader').style.backgroundColor = "#222";
        
    }, 100);
    setTimeout(() => {
        document.location.replace(destination + '.html');
    }, 700);
    
    
        
}
function inviteToDiscord() {
    window.location.href = "https://discord.gg/yJyYWv2Ydh"
}
function getScroll() {
    var y = window.scrollY;
    if (window.innerWidth < 768) {
        if (y >= 720) {
            document.getElementById("navbar").style.backgroundColor = "#222";
            document.getElementById("titleNavBar").style.color = "#fff";
            document.getElementById("navBarLink").classList.remove("navBarLink")
            document.getElementById("navBarLink2").classList.remove("navBarLink")
            document.getElementById("navBarLink3").classList.remove("navBarLink")
            document.getElementById("navBarLink4").classList.remove("navBarLink")
            document.getElementById("navBarLink5").classList.remove("navBarLink")
            document.getElementById("navBarLink6").classList.remove("navBarLink")
            document.getElementById("span1").classList.remove("spanBurger")
            document.getElementById("span2").classList.remove("spanBurger")
            document.getElementById("span3").classList.remove("spanBurger")
            document.getElementById("span1").classList.add("spanOnScroll")
            document.getElementById("span2").classList.add("spanOnScroll")
            document.getElementById("span3").classList.add("spanOnScroll")
            document.getElementById("navBarLink").classList.add("navBarLinkOnScroll")
            document.getElementById("navBarLink2").classList.add("navBarLinkOnScroll")
            document.getElementById("navBarLink3").classList.add("navBarLinkOnScroll")
            document.getElementById("navBarLink4").classList.add("navBarLinkOnScroll")
            document.getElementById("navBarLink5").classList.add("navBarLinkOnScroll")
            document.getElementById("navBarLink6").classList.add("navBarLinkOnScroll")
        }else {
            document.getElementById("navbar").style.backgroundColor = "transparent";
            document.getElementById("titleNavBar").style.color = "#222";
            document.getElementById("navBarLink").classList.remove("navBarLinkOnScroll")
            document.getElementById("navBarLink2").classList.remove("navBarLinkOnScroll")
            document.getElementById("navBarLink3").classList.remove("navBarLinkOnScroll")
            document.getElementById("navBarLink4").classList.remove("navBarLinkOnScroll")
            document.getElementById("navBarLink5").classList.remove("navBarLinkOnScroll")
            document.getElementById("navBarLink6").classList.remove("navBarLinkOnScroll")
            document.getElementById("span1").classList.add("spanBurger")
            document.getElementById("span2").classList.add("spanBurger")
            document.getElementById("span3").classList.add("spanBurger")
            document.getElementById("span1").classList.remove("spanOnScroll")
            document.getElementById("span2").classList.remove("spanOnScroll")
            document.getElementById("span3").classList.remover("spanOnScroll")
            document.getElementById("navBarLink").classList.add("navBarLink")
            document.getElementById("navBarLink2").classList.add("navBarLink")
            document.getElementById("navBarLink3").classList.add("navBarLink")
            document.getElementById("navBarLink4").classList.add("navBarLink")
            document.getElementById("navBarLink5").classList.add("navBarLink")
            document.getElementById("navBarLink6").classList.add("navBarLink")
        }
    }else {
        if (y >= 720) {
            document.getElementById("navbar").style.backgroundColor = "#222";
            document.getElementById("titleNavBar").style.color = "#fff";
            document.getElementById("navBarLink").classList.remove("navBarLink")
            document.getElementById("navBarLink2").classList.remove("navBarLink")
            document.getElementById("navBarLink3").classList.remove("navBarLink")
            document.getElementById("navBarLink4").classList.remove("navBarLink")
            document.getElementById("navBarLink5").classList.remove("navBarLink")
            document.getElementById("navBarLink6").classList.remove("navBarLink")
            document.getElementById("navBarLink").classList.add("navBarLinkOnScroll")
            document.getElementById("navBarLink2").classList.add("navBarLinkOnScroll")
            document.getElementById("navBarLink3").classList.add("navBarLinkOnScroll")
            document.getElementById("navBarLink4").classList.add("navBarLinkOnScroll")
            document.getElementById("navBarLink5").classList.add("navBarLinkOnScroll")
            document.getElementById("navBarLink6").classList.add("navBarLinkOnScroll")
        }else {
            document.getElementById("navbar").style.backgroundColor = "transparent";
            document.getElementById("titleNavBar").style.color = "#222";
            document.getElementById("navBarLink").classList.remove("navBarLinkOnScroll")
            document.getElementById("navBarLink2").classList.remove("navBarLinkOnScroll")
            document.getElementById("navBarLink3").classList.remove("navBarLinkOnScroll")
            document.getElementById("navBarLink4").classList.remove("navBarLinkOnScroll")
            document.getElementById("navBarLink5").classList.remove("navBarLinkOnScroll")
            document.getElementById("navBarLink6").classList.remove("navBarLinkOnScroll")
            document.getElementById("navBarLink").classList.add("navBarLink")
            document.getElementById("navBarLink2").classList.add("navBarLink")
            document.getElementById("navBarLink3").classList.add("navBarLink")
            document.getElementById("navBarLink4").classList.add("navBarLink")
            document.getElementById("navBarLink5").classList.add("navBarLink")
            document.getElementById("navBarLink6").classList.add("navBarLink")
        }
    }
}
