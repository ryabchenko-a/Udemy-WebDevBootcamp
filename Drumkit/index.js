var buttons = document.querySelectorAll("button");

const sounds = {
    w: new Audio("./sounds/crash.mp3"),
    a: new Audio("./sounds/kick-bass.mp3"),
    s: new Audio("./sounds/snare.mp3"),
    d: new Audio("./sounds/tom-1.mp3"),
    j: new Audio("./sounds/tom-2.mp3"),
    k: new Audio("./sounds/tom-3.mp3"),
    l: new Audio("./sounds/tom-4.mp3")
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", (ev) => {
        const button = ev.target.innerHTML;
        console.log(button);
        sound = sounds[button].cloneNode();
        sound.play();
    });
}

document.addEventListener("keydown", (ev) => {
    const key = ev.key;
    console.log(key);
    sound = sounds[key].cloneNode();
    try {
        sound.play();
    } catch(err) {
        console.log("No sound is assigned to this key. Please, press one of the keys with a sound assigned to it.")
    }
});