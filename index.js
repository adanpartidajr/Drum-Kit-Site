//store number of buttons with selector of .drum into var
var numOfDrumButtons = document.querySelectorAll(".drum").length;

//querying through all selectors with class of .drum
for (var i = 0; i < numOfDrumButtons; i++) {

//finds buttons in html, looks for a click and runs the anonymous function
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    //assigns innerHTML of i button to var to test switch cases
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    });

}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);

});

function makeSound(key) {

    //tests innerHTML of i button to determine which audio file to assign and play
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        //if no correct button is pressed, log the input
        default: console.log();
    }
}