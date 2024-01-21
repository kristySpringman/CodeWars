//return true if the string ends with the second argument
//ie ('abc','bc) -> true
//('abc, 'd') -> false

function solution(str, ending) {
    // let answer = ""

    // for (let i = 0; i < str.length - ending.length; i++) {
    //     answer += str[i]
    // }
    // answer += ending
    // if (answer === str) {
    //     return true
    // } else {
    //     return false
    // }
    return str.endsWith(ending)
}

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))