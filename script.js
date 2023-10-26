console.log('🟥 🟦 🟩 🟨');
let redCount = 0;


function redButton(event) {
    console.log('Red button clicked');
    
    let blocks = document.getElementById('blocks');
    blocks.innerHTML += `<div onClick= deleteColor(event) class="block red-fill"></div>`
    let blockCounts = document.getElementById('red-count');
    // blockCounts.innerHTML 
    redCount ++;
};



function blueButton() {
    console.log('Blue button clicked');
    let blocks = document.getElementById('blocks');
    blocks.innerHTML += `<div onClick= deleteColor(event) class="block blue-fill"></div>`
};

function greenButton() {
    console.log('Green button clicked');
    let blocks = document.getElementById('blocks');
    blocks.innerHTML += `<div onClick= deleteColor(event) class="block green-fill"></div>`
};


function yellowButton() {
    console.log('Yellow button clicked');
    let blocks = document.getElementById('blocks');
    blocks.innerHTML += `<div onClick= deleteColor(event) class="block yellow-fill"></div>`
};


function deleteColor(event) {
    console.log('Delete color', event.target);
    event.target.remove()
};
