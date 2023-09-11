function showTime(){
    var time = new Date().toLocaleTimeString('en-US');
    var date = new Date().toLocaleDateString('en-US');

    document.querySelector('#time').innerHTML = time;
    document.querySelector('#date').innerHTML = date;

    setTimeout(showTime, 1000);
}