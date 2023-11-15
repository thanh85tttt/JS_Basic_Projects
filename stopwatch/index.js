window.onload = () => {
  let second = 0
  let tens = 0
  let secondElement = document.getElementById("seconds")
  let tensElement = document.getElementById("tens")
  let buttonStart = document.getElementById("button-start")
  let buttonStop = document.getElementById("button-stop")
  let buttonReset = document.getElementById("button-reset")
  let interval

  buttonStart.onclick = () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
  }

  buttonStop.onclick = () => {
    clearInterval(interval)
  }

  buttonReset.onclick = () => {
    clearInterval(interval)
    tens = "00"
    second = "00"
    secondElement.innerHTML = second
    tensElement.innerHTML = tens
  }

  const startTimer = () => {
    tens++

    if (tens <= 9) {
      tensElement.innerHTML = "0" + tens
    }

    if (tens > 9) {
      tensElement.innerHTML = tens
    }

    if (tens > 99) {
      second++
      secondElement.innerHTML = "0" + second
      tens = 0
      tensElement.innerHTML = "00"
    }

    if (second > 9) {
      secondElement.innerHTML = second
    }
  }
}
