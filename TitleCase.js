// Create a function that takes in two arguments, a title
// and minorWords, where your task is to capitalize the first
// letter of a word as if it were a movie or book title.
// The minor words play into this by delcaring that if the 
// title has words that are in the minor words list, do not
// capitalize them. The first letter of the first word in
// any title must be capitalized. If minor words aren't declared,
// capitalize first letter of all words. If title is an empty string
// will return a empty string back.
// ex. ('a clash of KINGS', 'a an the of') should return: 'A Clash of Kings'
// ('the quick brown fox') should return: 'The Quick Brown Fox'

function titleCase(title, minorWords) {
    let result = []
    if (title == "") {
        return ""
    } else if (minorWords === undefined) {
        let wordArr = title.toLowerCase().split(" ")
        wordArr.forEach((word) => {
            result.push(word.charAt(0).toUpperCase() + word.slice(1))
        })
    }
    else {
        let wordArr = title.toLowerCase().split(" ")
        let minorArr = minorWords.toLowerCase().split(" ")

        wordArr.forEach((word) => {
            if (minorArr.indexOf(word) === -1) {
                result.push(word.charAt(0).toUpperCase() + word.slice(1))
            } else {
                result.push(word)
            }
            firstWord = result[0].toString().charAt(0).toUpperCase() + result[0].slice(1)
            result.splice(0, 1, firstWord)
        })
    }
    if (result.length === 1) {
        return result.slice(0, result.length - 1).join(' ') + result.slice(-1)
    } else {
        return result.slice(0, result.length - 1).join(' ') + " " + result.slice(-1)
    }
}