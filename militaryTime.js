//translate time into military time
//input time will be formatted as
//07:54:38PM
s =

    function timeConversion(s) {
        let hours = s.slice(0, 2)
        let minutes = s.slice(3, 5)
        let seconds = s.slice(6, 8)
        let amOrPm = s.slice(8, 10)
        if (hours === "12") {
            hours = "00"
        }
        if (amOrPm === "PM") {
            hours = parseInt(hours) + 12
        }
        let time = `${hours}:${minutes}:${seconds}`;
        return time



        /* //Split time into an array
        let timeArr = s.split("")
        //if the word PM is in s, do things
        if (s.includes("PM")) {
            //remove the PM
            timeArr = timeArr.slice(0, timeArr.length - 2)
            let militaryHour
            //To make it military, must add 12 to first two numbers of array
            //If it's PM and our time is 12, keep it at 12
            if ((parseInt(timeArr.slice(0, 2).join("")) === 12)) {
                militaryHour = 12
            } else {
                //Once it's 1pm+, add 12 to that number
                militaryHour = (parseInt(timeArr.slice(0, 2).join("")) + 12)
            }
            //If the military hour is 24 and there's minutes, make hour 0
            if (militaryHour === 24 && parseInt(timeArr.slice(3, 5).join("")) >= 0) {
                timeArr.splice(0, 2, "00")
                return timeArr.join("")
            } else {
                timeArr.splice(0, 2, militaryHour)
                return timeArr.join("")
            }
        } else {
            //if it's AM and the time is 12
            if (parseInt(timeArr.slice(0, 2).join("")) === 12) {
                timeArr.splice(0, 2, "00")
                return (timeArr.slice(0, timeArr.length - 2).join(""))
    
            }
            return (timeArr.slice(0, timeArr.length - 2).join(""))
        } */
    }