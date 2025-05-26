 let buttons = document.querySelectorAll("button");
 buttons.forEach(button => {
     button.addEventListener("click", function()
        {
            if (button.classList.contains("w")) { 
                makeSound("sounds/crash.mp3");
        }
            else if (button.classList.contains("a")) {
                makeSound("sounds/kick-bass.mp3");
            }
            else if (button.classList.contains("s")) {
                makeSound("sounds/snare.mp3");
            }
            else if (button.classList.contains("d")) {
                makeSound("sounds/tom-1.mp3");
            }
            else if (button.classList.contains("j")) {
                makeSound("sounds/tom-2.mp3");
            }
            else if (button.classList.contains("k")) {
                makeSound("sounds/tom-3.mp3");
            }
            else if (button.classList.contains("l")) {
                makeSound("sounds/tom-4.mp3");
            }
 });
 }
);

document.addEventListener("keydown", function(event) {
    
    switch (event.key) {
        case "w":
            makeSound("sounds/crash.mp3");
            break;
        case "a":
            makeSound("sounds/kick-bass.mp3");
            break;
        case "s":
            makeSound("sounds/snare.mp3");
            break;
        case "d":
            makeSound("sounds/tom-1.mp3");
            break;
        case "j":
            makeSound("sounds/tom-2.mp3");
            break;
        case "k":
            makeSound("sounds/tom-3.mp3");
            break;
        case "l":
            makeSound("sounds/tom-4.mp3");
            break;
        default:
            console.log(event.key);
    }   
});

 function makeSound(sound){
     let audio = new Audio(sound);
        audio.play();
 }