///popup
const popUp = document.getElementById("pop-up");
let popupAnimation;
let showPopup = true;

////animation popup
let opacityValue = 0;
const delay = 3000; 
let userNotStratAnimation = true;

////spining
const mainPictureInHTML = document.getElementById("main-image");
const startAnimation = document.getElementById("btn-start");
const stopAnimation = document.getElementById("btn-stop");
let bikeAnimationHandle;
let timeoutHandle;
let spining = false;
let currentImageNumber = 1;
const maxImageNumber = 34;





////popup animation
setTimeout( function(){
    if(showPopup === true){
        popupAnimation = requestAnimationFrame( fade );
    }
} , delay);

function fade(){
    opacityValue = opacityValue + .05;
    if(opacityValue <= 1){
        popUp.style.opacity = opacityValue;
        requestAnimationFrame( fade );
    }else{
        popUp.style.opacity = 1;
    }    
}

///popup
const closePopup = document.getElementById("btn-close");
closePopup.addEventListener("click", function(){
    popUp.style.opacity = "0";
});

/////stop and start

startAnimation.addEventListener("click", function(){           
    if(userNotStratAnimation){
        spining = true;
        bikeAnimationHandle = requestAnimationFrame( spiningImage );
        userNotStratAnimation = false;
        showPopup = false;
    }
});


stopAnimation.addEventListener("click", function(){
    clearTimeout(timeoutHandle);
    cancelAnimationFrame(bikeAnimationHandle);
    userNotStratAnimation = true; 
});



////spining
function spiningImage(){      
    currentImageNumber++;
    if(currentImageNumber > maxImageNumber ){
        currentImageNumber = 1;
    }
    
    mainPictureInHTML.src = `product-images/bike-${currentImageNumber}.jpg`;

    timeoutHandle = setTimeout(function(){
        bikeAnimationHandle = requestAnimationFrame( spiningImage );
    }, 100);  
}













