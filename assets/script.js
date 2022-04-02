
var currentDay = document.querySelector('#currentDay')
var timeBlocks = document.querySelector('.container')

var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']


// create time-blocks
function createTimeBlocks() {
    for (var i=0; i < hours.length; i++) {
        var hour = document.createElement('h3')
        var block = document.createElement('li')
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