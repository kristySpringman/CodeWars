//given an array containing non-negative integers, arrange the numbers from
//smallest to largest so that each number is bigger than the previous one 
//exactly by 1. Return how many numbers would be needed to be inserted into
//the array to make this possible
//ie. [4,6,5,8] -> 4,5,6,[7],8 (7 is missing) -> would return 1

function solution(statues) {
    statues.sort((a, b) => a - b)
    let answer = 0
    for (let i = 0; i < statues.length - 1; i++) {
        if (statues[i + 1] - statues[i] !== 1) {
            answer += (statues[i + 1] - 1) - statues[i]
        }
    }
    return answer
}
