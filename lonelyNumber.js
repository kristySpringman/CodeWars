//Given an array, find the number that doesn't occur more than once

let a = [0, 0, 1, 2, 1]

function lonelyinteger(a) {
    console.log(a)
    // A value in set can only appear once. 
    ///Set is an object that lets you store unique values of any type
    const mySet = new Set()
    a.forEach(number => mySet.has(number) ? mySet.delete(number) : mySet.add(number))
    console.log(mySet)
    //need to use Array.from to get data within a Set, and then choose the element you want in the array
    return Array.from(mySet)[0]
}