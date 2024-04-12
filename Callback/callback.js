//Arrow Function
let sum = (a, b) => {
    return a + b;
}

console.log('>> check sum: ', sum(6, 9));


//Callback

let sumA = (a, b, callback) => {
    let tong = a + b;
    callback(tong);
}

let printSum = (message) => {
    console.log('>> check sum: ', sum(6, 9))
}

sumA(6, 9, printSum);