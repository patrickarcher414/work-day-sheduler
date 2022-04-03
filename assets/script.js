
var currentDay = document.querySelector('#currentDay')
var timeBlocks = document.querySelector('.container')
var currentHour = moment().format('H');
var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']
var eventInput = []

// create time-blocks
function createTimeBlocks() {
    for (var i=0; i < hours.length; i++) {
        var row = document.createElement('div')
        row.classList.add('row')
        var hour = document.createElement('h3')
        hour.classList.add('hour')
        hour.innerText = hours[i]
        var eventText = document.createElement('textarea')
        eventText.setAttribute('id', i)
      
        // color code time blocks past, present, future
        var time = i + 9;
        if (currentHour > time) {
            eventText.classList.add('col-lg-7', 'past')
        } else if (currentHour < time){
            eventText.classList.add('col-lg-7', 'future')
        } else {
            eventText.classList.add('col-lg-7', 'present')
        }

        var button = document.createElement('button')
        button.classList.add('saveBtn', 'col-lg-2');
        button.addEventListener('click', function(ev) {
            ev.preventDefault();
           // I can not figure out how to store textarea input...
        })

        row.appendChild(hour)
        row.appendChild(eventText)
        row.appendChild(button)
        timeBlocks.appendChild(row)
    }
}



// display current day in #currentDay

currentDay.innerText = moment().format('MMMM Do YYYY');


createTimeBlocks();



