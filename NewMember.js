// Function will take in an array of multiple arrays inside of it
// where the first number in the array indicates age and the second
// number indicates their handicap score.
// In this Croquet Club, in order to be considered for a senior membership, 
// a member needs to be at least 55 years old, and have a handicap greater than 7.
// Otherwise, the member will be placed in the Open membership.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


function openOrSenior(data) {
    let qualification = []
    data.forEach(function(person){
        if (person[0] >= 55 && person[1] >7){
            qualification.push("Senior");
        }else{
            qualification.push("Open");
        }
    })
    return qualification;
}