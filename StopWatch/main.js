var hours = $('#hours');
var minutes = $('#minutes');
var second = $('#second');
var millisecond = $('#millisecond');

hours = 0
minutes = 0
second = 0
millisecond = 0

function startBtn() {

    Timer = setInterval(function() {
        
        $('#millisecond').text(millisecond++);
        if(millisecond > 9){
            millisecond = 0;
            $('#second').text(second += 1);
        }
        if(second > 59){
            second = 0;
            $('#minutes').text(minutes += 1);
        }
        if(minutes > 59){
            minutes = 0;
            $('#hours').text(hours += 1);
        }
        
    },100);
}

function stopBtn() {
    if (Timer) {
      clearInterval(Timer);
    }
}

function resetBtn() {
    $('#millisecond').text(millisecond = 0);
    $('#second').text(second = 0);
    $('#minutes').text(minutes= 0);
    $('#hours').text(hours = 0);
}
