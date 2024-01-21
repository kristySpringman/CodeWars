//below 10, multiples of 3 or 5 is
//3,5,6,9. add them together and get 23
//given a number, give sum of numbers that are multiples of 3 or 5 below that number

function solution(number) {
    sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            sum += i
        }
    }
    return sum
}


console.log(solution(10))
//23
