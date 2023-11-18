"use strict"

const input = document.getElementById("input")
const numbers = document.querySelectorAll(".numbers div")
const operators = document.querySelectorAll("#operators div")
const result = document.getElementById("rightPanel")
const clear = document.getElementById("clear")
let resultDisplayed = false

// Handle number clicks
for (const number of numbers) {
  number.addEventListener("click", () => {
    if (!resultDisplayed) {
      input.textContent += number.textContent
    } else if (
      (resultDisplayed && input.textContent.endsWith("+")) ||
      input.textContent.endsWith("-") ||
      input.textContent.endsWith("×") ||
      input.textContent.endsWith("÷")
    ) {
      resultDisplayed = false
      input.textContent += number.textContent
    } else {
      resultDisplayed = false
      input.textContent = ""
      input.textContent += number.textContent
    }
  })
}

// Handle operator clicks
for (const operator of operators) {
  operator.addEventListener("click", () => {
    const lastChar = input.textContent[input.textContent.length - 1]

    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      input.textContent =
        input.textContent.substring(0, input.textContent.length - 1) +
        operator.textContent
    } else if (input.textContent.length === 0) {
      console.log("Enter a number first")
    } else {
      input.textContent += operator.textContent
    }
  })
}

// Handle equals click
result.addEventListener("click", () => {
  const inputString = input.textContent
  const nums = inputString.split(/\+|\-|\×|\÷/g)
  const ops = inputString.replace(/[0-9]|\./g, "").split("")

  let result = parseFloat(nums[0])
  for (let i = 0; i < ops.length; i++) {
    const num2 = parseFloat(nums[i + 1])
    switch (ops[i]) {
      case "+":
        result += num2
        break
      case "-":
        result -= num2
        break
      case "×":
        result *= num2
        break
      case "÷":
        result /= num2
        break
    }
  }

  input.textContent = result
  resultDisplayed = true
})

// Handle clear click
clear.addEventListener("click", () => {
  input.textContent = ""
})
