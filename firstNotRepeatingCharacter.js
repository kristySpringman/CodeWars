//given a string of letters, find the first letter that does not repeat within the string

function solution(s) {
    for (var i = 0; i < s.length; i++) {
        //pull out characters in string
        var character = s.charAt(i);
        //indexOf(searchElement, fromIndex)
        //search element from index and see if it appears again
        if (s.indexOf(character) == i && s.indexOf(character, i + 1) == -1) {
            return character;
        }
    }
    return "_";
}    