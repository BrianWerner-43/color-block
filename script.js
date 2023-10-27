console.log('🟥 🟦 🟩 🟨');

// Set global variables for the color blocks

let redCount = 1;
let blueCount = 1;
let greenCount = 1;
let yellowCount = 1;


// Created a function that will append a red block when clicked and update the count
function redButton() {
    console.log('Red button clicked');
   let blocks = document.getElementById('blocks');
    blocks.innerHTML += `<div onClick= deleteColor(event) class="block red-fill"></div>`
    
    redCount ++;
    console.log(redCount);

    document.getElementById('redCount').textContent = redCount;
};

//Created a function that will append a blue block when clicked and update the count
function blueButton() {
    console.log('Blue button clicked');
    let blocks = document.getElementById('blocks');
    blocks.innerHTML += `<div onClick= deleteColor(event) class="block blue-fill"></div>`

    blueCount ++;
    console.log(blueCount);

    document.getElementById('blueCount').textContent = blueCount;
};

//Created a function that will append a green block when clicked and update the count
function greenButton() {
    console.log('Green button clicked');
    let blocks = document.getElementById('blocks');
    blocks.innerHTML += `<div onClick= deleteColor(event) class="block green-fill"></div>`

    greenCount ++;
    console.log(greenCount);

    document.getElementById('greenCount').textContent = greenCount;
};

//Created a function that will append a yellow block when clicked and update the count
function yellowButton() {
    console.log('Yellow button clicked');
    let blocks = document.getElementById('blocks');
    blocks.innerHTML += `<div onClick= deleteColor(event) class="block yellow-fill"></div>`

    yellowCount ++;
    console.log(yellowCount);

    document.getElementById('yellowCount').textContent = yellowCount;
};

// Created a a delete function the deletes the corrisponding color block when cliked
function deleteColor(event) {
    console.log('Delete color', event.target);
    event.target.remove()
    
};
