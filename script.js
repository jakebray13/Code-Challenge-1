$(document).ready(onReady);

function onReady() {
    $('#generateButton').on('click', addDiv);
    $()
    $('.multipleDivs').on('click', '.swapButton', swapButton);
    $('.multipleDivs').on('click', '.deleteButton', deleteButton);
}

function addDiv(){
    $('body').append('<div class="multipleDivs"></div>');
    $('.multipleDivs').append('<p id="buttonClicks"></p>');
    $('#buttonClicks').html(function(i, val) { return val*1+1 }).append(val);
    var val = 0;   
    $('#buttonClicks').append('<button>Swap</button>');
}

function addButtons() {
    $('.multipleDivs').append('<button id="swapButton">Swap</button>')
    $('.multipleDivs').append('<button id="deleteButton">Delete</button>')
}

// function swapButton() {
//     $('#swapButton').css('background-color', 'yellow');
// }

// function deleteButton() {
    //$(this).parent().remove();
// }
