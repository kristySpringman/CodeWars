//given a n x n 2D matrixs, rotate it by 90 degrees clockwise
//[[1, 2, 3],
//[4, 5, 6],
//[7, 8, 9]]
//would be
//[[7, 4, 1],
//[8, 5, 2],
//[9, 6, 3]]


function solution(a) {
    let answer = []
    for (let i = 0; i < a.length; i++) {
        answer.push(a.map(rows => rows[i]).reverse())
    }
    return answer
}

