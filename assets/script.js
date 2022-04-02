
var currentDay = document.querySelector('#currentDay')
var timeBlocks = document.querySelector('.container')
var color 
var d = new Date();
var time
var currentHour = d.getHours();
var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']

// color-code time blocks. past = grey, present = red, future = green.
// function colorCode() {
//     if (currentHour > 12) {
//         currentHour - 12;
//     }
//     if (getTime < currentHour) {
//         color = '#DBD4D3';
//     } 
//     if (getTime === currentHour) {
//         color = '#E83151';
//     }
//     if (getTime > currentHour) {
//         color = '#D2CCA1';
//     }
// } 

// get time value from time-blocks
var time = function() {
    for (var i=0; i < hours.length; i++) {
        parseInt(hours[i]) 
    }
}
console.log(time)

// create time-blocks
function createTimeBlocks() {
    for (var i=0; i < hours.length; i++) {
        var hour = document.createElement('h3')
        var block = document.createElement('p')
        block.style.padding = '30px';
        block.style.border = 'solid black 1px';
        // if (getTime)
        block.style.backgroundColor = '#DBD4D3';
        hour.innerText = hours[i]
        timeBlocks.appendChild(hour)
        timeBlocks.appendChild(block)
    }
}

// display current day in currentDay p
function dateDisplay() {
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();
    var today = currentDay.innerHTML = month + "/" + day + "/" + year
};

dateDisplay();
createTimeBlocks();
// colorCode();
getTime();

