const ZERO = "0"

function showTime() {
  var date = new Date()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  var session = "AM"
  var myClockDisplay = document.getElementById("myClockDisplay")

  if (hour == 0) {
    hour = 12
  }

  if (hour > 12) {
    hour = hour - 12
    session = "PM"
  }

  hour = hour < 10 ? ZERO + hour : hour
  minute = minute < 10 ? ZERO + minute : minute
  second = second < 10 ? ZERO + second : second

  var time = hour + ":" + minute + ":" + second + " " + session

  myClockDisplay.innerHTML = time
  myClockDisplay.textContent = time

  setTimeout(showTime, 1000)
}


showTime()