let weekday = new Array(7);
        weekday[0] = "SUN";
        weekday[1] = "MON";
        weekday[2] = "TUE";
        weekday[3] = "WED";
        weekday[4] = "THU";
        weekday[5] = "FRI";
        weekday[6] = "SAT";

var month = new Array();
        month[0] = "JAN";
        month[1] = "FEB";
        month[2] = "MAR";
        month[3] = "APR";
        month[4] = "May";
        month[5] = "JUN";
        month[6] = "JUL";
        month[7] = "AUG";
        month[8] = "SEP";
        month[9] = "OCT";
        month[10] = "NOV";
        month[11] = "DEC";


function getCurrentTime() {
    let currentTimeDate = new Date();
    let hours = currentTimeDate.getHours();
    let minutes = currentTimeDate.getMinutes();
    let seconds = currentTimeDate.getSeconds();
    let AMPM = null;

    if (hours === 12) {
        hours = 12;
    
    }
    else {
        hours = hours%12;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    else {
        minutes = minutes;
    }

    if (hours >= 12) {
        AMPM = "PM";
    }
    else {
        AMPM = "AM";
    }

    let currentTime = `${hours}:${minutes} ${AMPM}`;
    setTimeout(getCurrentTime, 500);

    document.getElementById("current-time").innerHTML = currentTime;

    return currentTime;
}

getCurrentTime();