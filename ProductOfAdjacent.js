// Given an array of integers, find the pair of 
// adjacent numbers that have the largest product

function solution(inputArray) {
    const answer = []
    for(let i = 0; i<inputArray.length-1; i++){
        answer.push(inputArray[i] * inputArray[i+1])
        }
    answer.sort(function(a,b){
        return b-a
    });
    return answer[0]
}