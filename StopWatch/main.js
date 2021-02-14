var hours = $('#hours');
var minutes = $('#minutes');
var second = $('#second');
var millisecond = $('#millisecond');

hours = 0
minutes = 0
second = 0
millisecond = 0

function startBtn() {
    var sCount = function() {
        $('#second').text(second++);
    }
    var ids = setInterval(function(){
        sCount();
        if(second > 9){　
            clearInterval(ids);
        }
    }, 1000);

    var msCount = function() {
        $('#millisecond').text(millisecond++);
    }
    var idms = setInterval(function(){
        msCount();
        if(millisecond > 9){
            clearInterval(idms);
        }},100);
    
    
    var mCount = function() {
        $('#minutes').text(minutes++);
    }
    var idm = setInterval(function(){
        mCount();
        if(minutes > 9){
            clearInterval(idm);
        }},10000);
    
        var hCount = function() {
            $('#hours').text(hours++);
        }
        var idh = setInterval(function(){
            hCount();
            if(hours> 9){
                clearInterval(idh);
            }},10000000);

}
    


