function countSevensInRange() {
    let answer = 0;
    for (let i = 7; i <= 7777777; i++) {
        // Convert the current number to a string to check each digit
        if (i % 7 === 0) {
            let multiplied = i.toString()

            for (let j = 0; j < multiplied.length; j++) {
                if (multiplied[j] === "7") {
                    answer++
                }
            }

        }
    }
    return answer;
}

const result = countSevensInRange();
console.log(`The digit '7' appears ${result} times`);
