function mobileMenu(elem){
    var menu = document.getElementById("top-menu");

    if(elem.checked == true){
        menu.classList.remove("menu-hide")

    } else {
        menu.classList.add("menu-hide")

    }
}

function animations() {
    console.log("koe")

}

const nameDiv = document.getElementById("name-div");
const topDiv = document.getElementById("top-menu");
const reveal = Array.from(document.querySelectorAll('.reveal'));
const left = Array.from(document.querySelectorAll('.left'));

function isOnScreen(element) {
    let rect = element.getBoundingClientRect();
    return (rect.top > 0 && (rect.bottom - rect.height / 3) < window.innerHeight) || rect.bottom < rect.height && rect.top > 0 - rect.height / 2;
}

function playAnimation(element) {
    if(isOnScreen(element)) {
        element.style.animation = '';
        element.style.animationPlayState = 'running';
    }
}

nameDiv.style.animationPlayState = 'running';
topDiv.style.animationPlayState = 'running';

window.onscroll = function () {
    reveal.forEach(playAnimation)
    left.forEach(playAnimation)
};

function popupHide() {
    let element = document.getElementById('popup');
    let element2 = document.getElementById('img-div');
    element.style.display = 'none';
    element2.style.display = 'none';
}

function openImg(e) {
    let src = '.' + e.getAttribute('src');
    let element = document.getElementById('popup');
    let element2 = document.getElementById('img-div');
    let element3 = document.getElementById('img-background');
    element.style.display = 'block';
    element2.style.display = 'block';
    element3.style.backgroundImage = `url(${src})`;
    
}