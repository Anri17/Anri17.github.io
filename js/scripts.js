// default volume for all audio elements
let audioElements = document.getElementsByTagName("audio");
for (let i = 0; i < audioElements.length; i++) {
    const element = audioElements[i];
    element.volume = 0.5;
}

// Scroll down button
function scroll_down(destination_id) {
    $('html, body').animate({ scrollTop: $(destination_id).offset().top}, 500);
}

let navbar_title_size_min = "2rem";
let navbar_title_size_max = "3.5rem";
const nav_burger_button = document.getElementById("nav_burger_button");
let burger_is_active = false;

window.onload = () => {

    if (burger_is_active) {
        nav_burger_container.style.height = "100%";
    } else {
        nav_burger_container.style.height = "0%";
    }
}

window.onresize = () => {
    navbar_title_resize();
}

window.onscroll = () => {
    navbar_title_resize();
}

nav_burger_button.onclick = () => {
    let nav_burger_container = document.getElementById("nav_burger_container");

    burger_is_active = !burger_is_active;

    if (burger_is_active) {
        nav_burger_container.style.height = "100%";
    } else {
        nav_burger_container.style.height = "0%";
    }
}

function navbar_title_resize()
{
    // define size_max based on window width
    if (document.body.clientWidth > 630) {
        navbar_title_size_min = "2rem";
        navbar_title_size_max = "3.5rem";
    }
    else {
        navbar_title_size_min = "1.8rem";
        navbar_title_size_max = "1.8rem";
    }
    // change font size
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("nav_brand").style.fontSize = navbar_title_size_min;
    } else {
        document.getElementById("nav_brand").style.fontSize = navbar_title_size_max;
    }
}

