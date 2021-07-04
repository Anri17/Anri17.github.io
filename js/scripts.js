// default volume for all audio elements
let audioElements = document.getElementsByTagName("audio");
for (let i = 0; i < audioElements.length; i++) {
    const element = audioElements[i];
    element.volume = 0.5;
}
