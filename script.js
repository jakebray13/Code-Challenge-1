$(document).ready(onReady);

function onReady() {
    $('#generateButton').on('click', addDiv);
    $('body').on('click', '.swapButton', swapButton);
    $('body').on('click', '.deleteButton', deleteButton);
}

var clicks = 0

function addDiv(){
    clicks += 1    
    $('body').append('<div class="multipleDivs"><p class="buttonClicks">' + clicks + '</p><button class="swapButton">Swap</button><button class="deleteButton">Delete</button></div>');
}


function swapButton() {
    $(this).parent().toggleClass('yellow');
}

function deleteButton() {
    $(this).parent().remove();
}
