// given a number n which indicates how large a box is,
// calculate the area of the box if it were a diagonal
//ex. n=2, area -> 5
//  *
//* * *
//  *

function solution(n) {
    let squareArea = 0
    squareArea = (n * n) + ((n - 1) * (n - 1))

    return squareArea
}
