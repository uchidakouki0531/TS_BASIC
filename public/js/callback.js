"use strict";
function handleRandom(count) {
    const randomNumber = Math.random();
    const message = `${count}: ${randomNumber}`;
    console.log(message);
}
// main
function start(callback) {
    var count = 0;
    const timer = setInterval(() => {
        count++;
        if (count >= 5)
            clearInterval(timer);
        callback(count);
    }, 1000);
}
function calculate(price, amount) {
    var result = price * amount;
    return result;
}
// run main
start(handleRandom);
// start(calculate);
//Unit Test
// handleRandom(1);