let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
  
let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;
  
// Start Button
startButton.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
  
// Stop Button
stopButton.addEventListener('click', function () {
    timer = false;
});
  
// Reset Button
resetButton.addEventListener('click', function () {
    let result = "";
    if(hour != 00) result = result + hour + " hours ";
    if(minute != 00) result = result + minute + " minutes ";
    if(second != 00) result = result + second + " seconds ";
    if(millisecond != 00) result = result + millisecond + " milliseconds ";
    alert("Stopped at "+ result); /* Display the value when stopwatch stopped */
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
    document.getElementById('millisecond').innerHTML = "00";
});
  
function stopWatch() {
    if (timer) {
        millisecond++;
  
        if (millisecond == 100) {
            second++;
            millisecond = 0;
        }
  
        if (second == 60) {
            minute++;
            second = 0;
        }
  
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
  
        let hourString = hour;
        let minuteString = minute;
        let secondString = second;
        let millisecondString = millisecond;
  
        if (hour < 10) {
            hourString = "0" + hourString;
        }
  
        if (minute < 10) {
            minuteString = "0" + minuteString;
        }
  
        if (second < 10) {
            secondString = "0" + secondString;
        }
  
        if (millisecond < 10) {
            millisecondString = "0" + millisecondString;
        }
  
        document.getElementById('hour').innerHTML = hourString;
        document.getElementById('minute').innerHTML = minuteString;
        document.getElementById('second').innerHTML = secondString;
        document.getElementById('millisecond').innerHTML = millisecondString;
        setTimeout(stopWatch, 10);
    }
}