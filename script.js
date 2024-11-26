const btn = document.querySelectorAll(".btn");
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const answer = document.querySelector(".answer");
const clear = document.querySelector(".clear");
const display = document.querySelector(".display");
const numberItem = document.querySelectorAll(".numItem");
const otherItem = document.querySelectorAll(".otherItem");

let result = 0;
let currentDisplay = "";
let lastClick = "";
let operator = "+-x÷";

btn.forEach((button) => {
    button.addEventListener("click", ()=> {
        if(operator.includes(lastClick) && (operator.includes(button.textContent))) {
            alert("Attention! You can't do that!");
            lastClick = button.textContent;
        }
        else {
            lastClick = button.textContent;
            currentDisplay += button.textContent;
            display.textContent = currentDisplay;
        }
    });
});

clear.addEventListener("click", ()=>{
    currentDisplay = "";
    display.textContent = "";
    lastClick = "";
});

answer.addEventListener("click", () => {
    let operatorArray = currentDisplay.match(/[+\-x÷]/);
    let operator = operatorArray[0];
    let [num1, num2] = currentDisplay.split(operator).map((e)=>{
        return Number(e);
    });
    console.log(num1);
    console.log(num2);
    console.log(operatorArray);
    if(operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "x") {
        result = num1 * num2;
    }
    else if (operator === "÷") {
        result = num1 / num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }

    display.textContent = result;
    currentDisplay = "";
});
