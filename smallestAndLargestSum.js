//When given an array of 5 numbers, return both the smallest sum and the largest sum

function miniMaxSum(arr) {
    let sortedArr = arr.map(num => num).sort()
    let smallSum = sortedArr.slice(0, arr.length - 1).reduce((prev, curr) => prev + curr)
    let largeSum = sortedArr.slice(1, arr.length).reduce((prev, curr) => prev + curr)
    console.log(smallSum + " " + largeSum)
}