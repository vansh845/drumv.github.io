
const snd = ["sounds/kick-bass.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3","sounds/crash.mp3 "];



document.addEventListener("keypress",function(event){
    if(event.code == "KeyW"){
            let au = new Audio("sounds/tom-1.mp3");
            au.play();
        }
     if(event.code == "KeyA"){
        let au = new Audio("sounds/tom-2.mp3");
        au.play();
    }
     if(event.code == "KeyS"){
        let au = new Audio("sounds/tom-3.mp3");
        au.play();
    } if(event.code == "KeyD"){
        let au = new Audio("sounds/tom-4.mp3");
        au.play();
    } if(event.code == "KeyJ"){
        let au = new Audio("sounds/crash.mp3");
        au.play();
    }
});


