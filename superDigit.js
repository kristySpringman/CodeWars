//Given some numers (n) and k (how many times to itterate over numbers to keep adding them), add each digit to each other to create a single digit number
// ex. superDigit(9875) -> 9+8+7+5 = 29
// 2+9 = 11
// 1+1 = 2

function superDigit(n, k) {
    let numArray = Array.from(String(n), Number)
    numArray = numArray.reduce((prev, curr) => prev + curr)
    return numArray > 10 ? superDigit(numArray, 1) : numArray
}