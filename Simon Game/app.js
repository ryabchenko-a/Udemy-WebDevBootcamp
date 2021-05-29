const sounds = {
    blue: new Audio("./sounds/blue.mp3"),
    green: new Audio("./sounds/green.mp3"),
    red: new Audio("./sounds/red.mp3"),
    yellow: new Audio("./sounds/yellow.mp3"),
    wrong: new Audio("./sounds/wrong.mp3")
};

const buttons = ["blue", "green", "red", "yellow"];

currentSequence = [];
currentIndex = 0;
isOn = false;

function restart() {
    currentSequence = [];
    currentIndex = 0;
}

function newButton() {
    const randomNumber = Math.floor(Math.random() * 4);
    const newButton = buttons[randomNumber];
    console.log("new button is " + newButton);
    return newButton;
}

function appendSequence() {
    const buttonAppend = newButton();
    console.log(buttonAppend + " is appended")
    currentSequence.push(buttonAppend);
    currentIndex = 0;
    $("h1").text("Level " + currentSequence.length);
    setTimeout(() => {
        playButton(buttonAppend);
        animateNew(buttonAppend);
    }, 800);
}

function lose() {
    sounds.wrong.play();
    restart();
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
    isOn = false;
}

function check(button) {
    if (button == currentSequence[currentIndex] && currentIndex + 1 == currentSequence.length) {
        appendSequence();
        playButton(button);
        animateCurrent(button);
        console.log("level is done");
    } else if (button == currentSequence[currentIndex]) {
        console.log("current index is " + currentIndex + ", current sequence length is " + currentSequence.length);
        currentIndex++;
        playButton(button);
        animateCurrent(button);
        console.log("level isn't done");
    } else {
        lose();
        console.log("you lost");
    }
}

$(".btn").click((ev) => {
    const button = ev.target.id;
    check(button);
});

function animateNew(button) {
    $("#" + button).fadeOut(100).fadeIn(100);
}

function animateCurrent(button) {
    $("#" + button).addClass("pressed");
    setTimeout(() => {
        $("#" + button).removeClass("pressed");
    }, 200);
}

function animateWrong(button) {
    animateCurrent(button);
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
}

function playButton(button) {
    sounds[button].play();
}

$("html").keydown((ev) => {
    if (!isOn) {
        isOn = true;
        appendSequence();
    }
});