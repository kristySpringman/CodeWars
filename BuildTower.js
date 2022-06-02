// Build a tower
// nFloors is a positive intiger
// if a nFloors =3
// return 
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// if a nFloors =6
// return 
// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let array = []
    for (let i = 0; i <= (nFloors - 1); i++) {
        if (i >= 0 && i != (nFloors - 1)) {
            array.push(' '.repeat(Math.ceil((((nFloors * 2) - 1) - (((i + 1) * 2) - 1)) / 2)) +
                "*".repeat(1 + (2 * i)) +
                ' '.repeat(Math.ceil((((nFloors * 2) - 1) - (((i + 1) * 2) - 1)) / 2))
            )
        }
    } array.push("*".repeat(1 + (2 * (nFloors - 1))))
    return array
}