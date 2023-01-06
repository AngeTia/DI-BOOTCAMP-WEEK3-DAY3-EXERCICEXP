// get a reference to the button and the animate div
const button = document.querySelector('button');
const divAnimation = document.querySelector('#animate');

// set the initial position of the animate div
divAnimation.style.left = '0px';

// define a function to move the animate div to the right
function moveBox() {
    // get the current position of the animate div
    let pos = 0;
    // move the animate div 1px to the right every 1 millisecond
    const id = setInterval(frame, 1);

    function frame() {
        if (pos >= 350) {
        // if the animate div reaches the right side of the container, stop the animation
        clearInterval(id);
        } else {
        // increment the position
        pos++;
        // update the position of the animate div
        divAnimation.style.left = pos + 'px';
        }
    }
}

// add an event listener to the button to start the animation when clicked
button.addEventListener('click', moveBox);