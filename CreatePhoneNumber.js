// Take in an array of numbers and translate them into a phone number
// Input ex -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// Output ex -> "(123) 456-7890"


function createPhoneNumber(numbers) {
    if (numbers.length > 10) {
        return console.log("Sorry, you entered more than 10 digits. Try again")
    }
    numbers.forEach(function (num) {
        let phoneNumber = '';
        if (num > -1 && num < 10 && numbers.length === 10) {
            phoneNumber += "(" + `${numbers[0]}` + `${numbers[1]}` + `${numbers[2]}` + ") "
            phoneNumber += `${numbers[3]}` + `${numbers[4]}` + `${numbers[5]}` + "-"
            phoneNumber += `${numbers[6]}` + `${numbers[7]}` + `${numbers[8]}` + `${numbers[9]}`
        } else {
            return console.error("Sorry, input must be a number between 0 and 9")
        }
    })
    return phoneNumber
}