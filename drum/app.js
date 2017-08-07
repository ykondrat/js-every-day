$(window).on('keydown', function(e){
    var audio = $('audio[data-key="' + e.keyCode + '"]')[0];
    var key = $('.key[data-key="' + e.keyCode + '"]');
    
    if (!audio) {
        return ;
    }
    audio.currentTime = 0;
    audio.play();
    key.addClass('playing');
});

function removeTransition(e) {
    $(this).removeClass('playing');
}

$('.key').each(function(index) {
    $(this).on('transitionend', removeTransition);
});