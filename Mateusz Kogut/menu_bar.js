var open = document.getElementById('hamburger');
var home = document.getElementById('link_home');
var education = document.getElementById('link_education');
var about = document.getElementById('link_about');
var contact = document.getElementById('link_contact')
var changeIcon = true;

var changeMenu = function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        document.body.style.overflow = "hidden";
        document.getElementById("chicken").style.visibility = "hidden";
        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        document.body.style.overflow = "auto";
        document.getElementById("chicken").style.visibility = "visible";
        changeIcon = true;
    }
};

var changeMenu_2 = function(){
    if(!changeIcon)
        changeMenu();
}

open.addEventListener("click", changeMenu);
home.addEventListener("click", changeMenu_2);
education.addEventListener("click", changeMenu_2);
about.addEventListener("click", changeMenu_2);
contact.addEventListener("click", changeMenu_2);
