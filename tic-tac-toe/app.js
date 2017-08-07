var player = 1;
var xWins = 0;
var oWins = 0;

function restartGame() {
    $('td').removeClass('x').text('');
    $('td').removeClass('o').text('');
    $('#reset button').remove();
    $('#winner').text('');
    $('td').attr('onclick', 'addElement(this)');
    player = 1;
}

function checkWinner() {
    var winArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    var counter = 0;
    
    for (var i = 0; i < winArray.length; i++){
        if (($('td').eq(winArray[i][0]).hasClass('x') && $('td').eq(winArray[i][1]).hasClass('x') && $('td').eq(winArray[i][2]).hasClass('x')) ||
            ($('td').eq(winArray[i][0]).hasClass('o') && $('td').eq(winArray[i][1]).hasClass('o') && $('td').eq(winArray[i][2]).hasClass('o'))) {
            if ($('td').eq(winArray[i][0]).hasClass('x')) {
                return (1);
            } else {
                return (2);
            }
        }
    }
    for (var i = 0; i < 9; i++) {
        if ($('td').eq(i).hasClass('x') || $('td').eq(i).hasClass('o')) {
            counter++;
            if (counter == 9) {
                return (3);
            }
        }
    }
    return (false);
}

function addElement(elem) {
    if (elem.innerHTML == '') {
        if (player == 1) {
            elem.innerHTML = '<i class="fa fa-times fa-5x" aria-hidden="true"></i>';
            elem.className += ' x';
            player = 2;
        } else {
            elem.innerHTML = '<i class="fa fa-circle fa-5x" aria-hidden="true"></i>';
            elem.className += ' o';
            player = 1;
        }
        var winner = checkWinner();

        if (winner) {
            $('td').removeAttr('onclick');
            if (winner == 1) {
                console.log('x win');
                xWins++;
                $('#scoreX').text(xWins);
                $('#winner').text('X winner');
                $('#reset').append('<button class="btn btn-success" onclick="restartGame()">Restart</button>');
            } else if (winner == 2){
                console.log('o win');
                oWins++;
                $('#scoreO').text(oWins);
                $('#winner').text('O winner');
                $('#reset').append('<button class="btn btn-success" onclick="restartGame()">Restart</button>');
            } else {
                $('#winner').text('Draw');
                $('#reset').append('<button class="btn btn-success" onclick="restartGame()">Restart</button>');
            }
        }
    }
}