// naive string search.

//given a string, and a short string, count how many times the short string appears in the long string.
const naiveStringSearch = (longStr, shortStr) => {
    let count = 0;
    // loop over long STring
    for (var i = 0; i < longStr.length; i++) {
        // loop over short string
        for (var j = 0; j < shortStr.length; j++) {
            if (shortStr[j] !== longStr[i + j]) {
                break;
            }
            if (j === shortStr.length - 1) {
                count++;
            }
        }
    }
    return count;
}

//naiveStringSearch("lorie loled", "lol")