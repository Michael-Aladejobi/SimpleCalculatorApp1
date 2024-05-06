let num1 = 8
let num2 = 5

document.getElementById('num1-el').textContent = num1
document.getElementById('num2-el').textContent = num2

let resultEl = document.getElementById('result-el')

function add(){
    resultEl.textContent = (num1 + num2)
}

function subtract(){
    resultEl.textContent = (num1 - num2)
}

function divide(){
    resultEl.textContent = (num1 / num2)
}

function multiply(){
    resultEl.textContent = (num1 * num2)
}