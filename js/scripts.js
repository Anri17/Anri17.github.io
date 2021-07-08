// default volume for all audio elements
let audioElements = document.getElementsByTagName("audio");
for (let i = 0; i < audioElements.length; i++) {
    const element = audioElements[i];
    element.volume = 0.5;
}

// Scroll down button


// testing
function scrollDown(destinationId) {
    $('html, body').animate({ scrollTop: $(destinationId).offset().top}, 500);
}
