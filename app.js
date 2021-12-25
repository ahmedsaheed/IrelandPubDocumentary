

let firstRun = 0;
// ------------------------Parallax effect slowdown for backgrounds ------------------------------


window.addEventListener("scroll", function (e) {

    const parallax = document.querySelector(".P1Div2");
    var scroll = window.pageYOffset;
    var offset = scroll *(- 0.5) * "px";

    parallax.style.backgroundPositionY = offset;

});



// -------------------------------------------- Gallery --------------------------------------------

let radius = 280, // radius for rotation
    autoRotate = true, // boolean for autorotate
    rotateSpeed = 25, // sets rotation speed
    cardWidth = 150, // sets card width
    cardHeight = 250, // sets cards height
    tX = 20,
    rotationY = 10, // sets rotation margin for manual mouse rotation
    shell = document.getElementById('GalleryInnerContainer'),
    stack = document.getElementById('CardStack'),
    images = stack.getElementsByTagName('img'),
    cardStack = images,
    base = document.getElementById('Base');
    stack.style.width = cardWidth + "px";
    stack.style.height = cardHeight + "px";
    base.style.height = radius * 3 + "px";

setTimeout(deployCardStack, 1200); // initial delay before spin start in miliseconds

function deployCardStack(delay) { // Loop will go thorugh card stack and apply below deplayment for each image found
    for (var i = 0; i < cardStack.length ; i++) {
        cardStack[i].style.transform = "rotateY(" + (i * (360 / cardStack.length)) + "deg) translateZ(" + radius + "px)"; // creates the arc degree in which cards will be positioned in the Z index
        cardStack[i].style.transition = "transform 2s"; // determines the transition style and duration of card stack deployment
        cardStack[i].style.transitionDelay = delay || (cardStack.length - i) / 4 + "s"; // will determine card shuffle speed in the beginning between individual cards
    }
}

function transform(obj) { // alows card stack to be manually rotated with the mouse in the X axis

    if(rotationY > 180) rotationY = 180;
    if(rotationY < 0) rotationY = 0;

    obj.style.transform = "rotateX(" + (-rotationY) + "deg) rotateY(" + (tX) + "deg)";
    // above formula can be amended to rotate in Z or Y access as well
}

if (autoRotate) {
    var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
    stack.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}


// -------------------------------------------- Gallery --------------------------------------------

// -------------------------------------------- Age Check --------------------------------------------



function ageCheck (e){
    var age = prompt ("Please enter your age (In years) ! How old are you ?"),
        gate=document.getElementById("Gate");
    firstRun+=e;

    if (age < 18) {
        window.location.href = "Minor.html";
    } else {
        firstRun = true;
        gate.style.visibility = "hidden";


}



}




// -------------------------------------------- Age Check --------------------------------------------