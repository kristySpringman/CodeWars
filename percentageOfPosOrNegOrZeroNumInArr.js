'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Take in an array that consists of negative and positive numbers as well
// as zero, and list the ratios of each in decimals consisting of 6 digits
// after the decimal
// print your answers

// positiveArr.length / arr.length

// Format:
// Positive
// Negative
// Zero

function plusMinus(arr) {
    let positiveArr = arr.filter(num => num > 0)
    let negativeArr = arr.filter(num => num < 0)
    let zeroArr = arr.filter(num => num === 0)

    let positiveRatio = (positiveArr.length / arr.length).toFixed(6)
    let negativeRatio = (negativeArr.length / arr.length).toFixed(6)
    let zeroRatio = (zeroArr.length / arr.length).toFixed(6)
    console.log(positiveRatio)
    console.log(negativeRatio)
    console.log(zeroRatio)


}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
