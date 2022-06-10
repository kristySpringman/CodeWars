// Given two integers (a and b) that can be positive or negative,
// find the sum of all numbers in between them including the numbers.
// If the numbers are the same, return a or b

function getSum( a,b ){
    let array =[];
    if (a===b){
        return a
    }else if (a>b){
        for(let i=b;i<=a;i++){
        array.push(i)
        }
    }else{
        for(let i=a;i<=b;i++){
        array.push(i)
        }
    }
    return array.reduce((prev, curr) => prev + curr, 0)
}