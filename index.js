const soundMap = {
    w: "sounds/crash.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/snare.mp3", 
    d: "sounds/tom-1.mp3",
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3"
};

document.querySelectorAll("button").forEach(button => {
     button.addEventListener("click", function(){
       makeSound(this.innerHTML);
     }
);
});

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});

function makeSound(key){
    const sound = soundMap[key];
    if(sound){
        const audio = new Audio(sound);
        audio.play();
    }
}