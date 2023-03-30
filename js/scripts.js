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

window.onresize = () => {
    navbar_title_resize();
}

window.onscroll = () => {
    navbar_title_resize();
}

function navbar_title_resize()
{
    // define size_max based on window width
    if (document.body.clientWidth > 630) {
        navbar_title_size_max = "3.5rem";
    }
    else {
        navbar_title_size_max = "2rem";
    }
    // change font size
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("nav_brand").style.fontSize = navbar_title_size_min;
    } else {
        document.getElementById("nav_brand").style.fontSize = navbar_title_size_max;
    }
}

