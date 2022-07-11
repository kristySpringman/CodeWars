// A caesar cipher where s contains the phrase to be ciphered, and k indicating how many spaces our letters
// should be shifted

function caesarCipher(s, k) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let capitalAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let ciphered = []
    console.log(s)
    console.log(k)
    for (let i = 0; i < s.length; i++) {
        let index = alphabet.indexOf(s[i])

        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            index = capitalAlphabet.indexOf(s[i])
            ciphered.push(alphabet[(index + k) % alphabet.length].toUpperCase())
            console.log(ciphered)
            console.log(index)
        } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
            ciphered.push(alphabet[(index + k) % alphabet.length])
        } else {
            ciphered.push(s[i])
        }
    }
    return ciphered.join("")
}