function showTime(){
    var date = new Date();

    var hours = date.getHours();
    if( hours < 10 )hours = "0" + hours;
    var minutes = date.getMinutes();
    if( minutes < 10 )minutes = "0" + minutes;
    var seconds = date.getSeconds();
    if( seconds < 10 )seconds = "0" + seconds;

    document.querySelector('.time').innerHTML = hours + ':' + minutes + ':' + seconds;
    setTimeout(showTime, 1000);
}
