// PART 1
// Send a message after 2 seconds
setTimeout(() => {
    alert("Hello World!");
}, 2000);


// PART 2
// variable for verifying
let verif = 0;
// variable to content function who creating Tag "p"
const tagContent = () => {
    let div = document.querySelector("div");
    const para = document.createElement("p");
    para.textContent = "Hello World!";
    div.appendChild(para);
    // verifiy the length of para
    verif++;
    // Stop the paragraph when verif = 5
    if (verif == 5){
        clearInterval(repeatInterval);
    }
}
// Give the time out to tagContent
setTimeout(() => {tagContent()}, 2000);

// PART 3
const repeatInterval = setInterval( () => {tagContent()}, 2000);

// To get button id and apply the event
const button = document.querySelector("#clear");
button.addEventListener("click", () => {
    clearInterval(repeatInterval);})