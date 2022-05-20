// Given a string of numbers separated by spaces, return the highest and lowest number

function highAndLow(numbers) {
    const numArray = numbers.split(' ');
    numArray.sort((a, b) => a - b)
    return (`${numArray[numArray.length - 1]} ${numArray[0]}`)
}