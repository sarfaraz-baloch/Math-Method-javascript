// let input = document.getElementById("input");
// let btn = document.getElementById("btn");
// let display = document.getElementById("display");

// // Q-1 Rounding number

// function Round(){
//     // let inputValue = input.value
//     // let Rounded = Math.round(inputValue)
//     // display.innerHTML = display.innerText + Rounded

// }

// // Q-2 Rondom number

// function Rondom() {
//   let inputValue = input.value;
//   // let Rounded = Math.round(inputValue)

//   let num = Math.random(10);
//   let num2 = Math.max(num);
//   let num3 = Math.min(num2);
//   let result = num2 + num3;
//   display.innerHTML = display.innerText + " " + result
// }

// // // // Q-3 Converting string to Number

// function Convert(){
//     let inputValue = input.value
//     let Rounded = parseInt( inputValue)
//     display.innerHTML = display.innerText + " " + Rounded

// }


// // // Q-4 Truncateing Decimal number

// function TrunCate() {
//     let inputValue = input.value
//     let multiplier = Math.pow(10, inputValue);
//     let truncatedNum = Math.floor(inputValue * multiplier) / multiplier;
//     return display.innerHTML = display.innerText + " " + truncatedNum;
// }


// // Q-5 FormateNumber
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let display = document.getElementById("display");

function FormateNumber() {
    let inputValue = input.value
    let convert = Number(inputValue)
    // let tofixed = inputValue.toString()
    let converting = convert.toFixed()
    let str =converting.toString()
    return display.innerHTML = display.innerText + " " + str;
}


 



