let objData = null;
let apiKey = null;

function getCurrentTime() {
    let currentTimeDate = new Date();
    let hours = currentTimeDate.getHours();
    let minutes = currentTimeDate.getMinutes();
    let seconds = currentTimeDate.getSeconds();
    let AMPM = null;

    if (hours >= 12) {
        AMPM = "PM";
    }
    else {
        AMPM = "AM";
    }
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

    let currentTime = `${hours}:${minutes} ${AMPM}`;
    
    setTimeout(getCurrentTime, 500);

    document.getElementById("current-time").innerHTML = currentTime;

    return currentTime;
}

function getCurrentDate() {
    let currentTimeDate = new Date();

    let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    let month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

    let currentDay = weekday[currentTimeDate.getDay()];
    let currentDate  = currentTimeDate.getDate();
    let currentMonth = month[currentTimeDate.getMonth()];
    let currentYear = currentTimeDate.getFullYear();
    let fullDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

    setTimeout(getCurrentDate, 500);

    document.getElementById("current-date").innerHTML = fullDate;

    return fullDate;
    
}

function getAllData(lat, long) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + long);
    request.send();

    request.onload = function() {
        /** We want this function to post all the data to the user's screen */
        objData = JSON.parse(request.responseText);
        postData(objData);
    };
}

function getCoordinatesByPostalCode(input) {
    let request = new XMLHttpRequest();
    let link = "http://api.openweathermap.org/geo/1.0/zip?zip=" + input + "&appid=";

    request.open("GET", link);
    request.send();

    request.onload = function() {
        let result = JSON.parse(request.responseText);
        getAllData(result.lat, result.lon);
    }
}


function postData(input) {
    
}

function retrieveData() {
    return objData;
}

function getSunriseTime() {
    let data = retrieveData();
    return data.results.sunrise;
}

function getSunsetTime() {
    let data = retrieveData();
    return data.results.sunset;
}

function getDayLength() {
    let data= retrieveData();
    return data.results.day_length;
}





getCurrentTime();
getCurrentDate();