// Given a master word and an array of words,
// see if any of the words in the array are an
// anagram of the master word
// Example input 'racer', ['crazer', 'carer', 'racar', 'caers', 'racer']
// Result: ['carer', 'racer']

function anagrams(word, words) {
    let answer = []
    words.forEach(phrase => {
        if (word.length != phrase.length) {
            return false;
        } else {
            let masterWordArr = word.split("").sort()
            let testWordArr = phrase.split("").sort()
            if (masterWordArr.toString() === testWordArr.toString()) {
                answer.push(phrase)
                return answer
            } else {
                return false
            }
        }
    })
    return answer
}