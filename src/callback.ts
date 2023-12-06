function handleRandom(count: number) {
    const randomNumber = Math.random();
    const message = `${count}: ${randomNumber}`;
    console.log(message);
}

// main
function start(callback: (count:number) => void) {
    var count = 0;
    const timer = setInterval(()=> {
        count++;
        if (count >= 5) clearInterval(timer);
        callback(count);
    }, 1000);
}

function calculate(price: number, amount:number): number {
    var result = price * amount;
    return result;
}

// run main
start(handleRandom);
// start(calculate);

//Unit Test
// handleRandom(1);