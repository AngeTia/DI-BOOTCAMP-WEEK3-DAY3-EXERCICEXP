// Get the element that will be used as the draggable object
const boxElement = document.getElementById("box");

// Add the event listeners for the drag and drop functionality
boxElement.addEventListener("dragstart", dragStart);
boxElement.addEventListener("dragend", dragEnd);

// Get the element that will be used as the drop target
const target = document.getElementById("target");

// Add the event listeners for the drag and drop functionality
target.addEventListener("dragenter", dragEnter);
target.addEventListener("dragover", dragOver);
target.addEventListener("dragleave", dragLeave);
target.addEventListener("drop", drop);

// Function that is called when the draggable object is starting to be dragged
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

// Function that is called when the draggable object is finished being dragged
function dragEnd(event) {
    // Reset the style of the element that was dragged
    event.target.style.opacity = "1";
}

// Function that is called when the drop target is entered
function dragEnter(event) {
    event.preventDefault();
}

// Function that is called when the drop target is being dragged over
function dragOver(event) {
    event.preventDefault();
}

// Function that is called when the drop target is left
function dragLeave(event) {
    event.preventDefault();
}

// Function that is called when the draggable object is dropped on the drop target
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}