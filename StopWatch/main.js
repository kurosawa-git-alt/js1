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

    $('#stopWatch #start-btn').attr('disabled','disabled');
    $('#stopWatch #stop-btn').removeAttr('disabled');
}


function stopBtn() {
    if (Timer) {
      clearInterval(Timer);
    }

    $('#stopWatch #stop-btn').attr('disabled','disabled');
    $('#stopWatch #reset-btn').removeAttr('disabled');
}

function resetBtn() {
    $('#millisecond').text(millisecond = 0);
    $('#second').text(second = 0);
    $('#minutes').text(minutes= 0);
    $('#hours').text(hours = 0);

    $('#stopWatch #reset-btn').attr('disabled','disabled');
    $('#stopWatch #start-btn').removeAttr('disabled');
}
