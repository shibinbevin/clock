function showTime(){
    var time = new Date().toLocaleTimeString('en-US');

    document.querySelector('#time').innerHTML = time;

    setTimeout(showTime, 1000);
}