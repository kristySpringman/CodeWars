// Check if inputted string is a palindrome

function solution(inputString) {
    const regExpressions = /[\W_,.]/g;
    let compactString = inputString.toLowerCase().replace(regExpressions, '');
    console.log(compactString)
    let reverse = compactString.split('').reverse().join('');
    console.log(reverse)
    if (reverse === compactString) {
        return true
    } return false
}