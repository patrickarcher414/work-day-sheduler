
var currentDay = document.querySelector('#currentDay')
var timeBlocks = document.querySelector('.container')
var d = new Date();
var currentHour = d.getHours();
var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']

// color-code time blocks. past = grey, present = red, future = green.
function colorCode(time) {
    if (time > currentHour) {
        return '#D2CCA1'
    }
    if (time === currentHour) {
        return '#E83151'
    }
    if (time < currentHour) {
        return '#DBD4D3'
    } 
} 

// get time value from time-blocks
function getTime() {
    for (var i=0; i <hours.length; i++) {
        parseInt(hours[i])
    }
}


// create time-blocks
function createTimeBlocks() {
    for (var i=0; i < hours.length; i++) {
        var hour = document.createElement('h3')
        var block = document.createElement('p')
        block.style.padding = '30px';
        block.style.border = 'solid black 1px';
        block.style.background = colorCode();
        hour.innerText = hours[i]
        timeBlocks.appendChild(hour)
        timeBlocks.appendChild(block)
    }
}

// display current day in currentDay p
function dateDisplay() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var today = currentDay.innerHTML = month + "/" + day + "/" + year
};

dateDisplay();
createTimeBlocks();
colorCode();
getTime();