//given an array, find out which number is the first duplicate
//ex. [2, 1, 3, 5, 3, 2] -> 3

function solution(a) {

    const exists = new Set()
    for (let i = 0; i < a.length; i++) {
        if (exists.has(a[i])) {
            return a[i]
        } else {
            exists.add(a[i])
        }
    }
    return -1
}

/* Previous answer
    //Create a set since sets can't have duplicates
    const haveDuplicate = (a) => a.length !== new Set(a).size;1
    if (haveDuplicate(a) === false){
        return -1
    }　else { 
        //filter through numbers and see if indexOf number in the array 
        //matches the index since indexOf will match index to first occurence
        //filter out the results that don't match in a new array
        const findDuplicates = (a) => a.filter((num, index) => 
            a.indexOf(num) !== index
        )
        //grab first element
        return findDuplicates(a)[0]
    } */

