// works on lists of numbers 
// it never makes comparisons between numbers! 
// group numbers by "buckets" numbers 0 - 9.
// start by the digit at the last (or first if single digit) position. based on the number, put it in it's relative bucket (0-9)
// repeat process for 2nd to last digit and so on. 

// start w/ helper functions 
const getDigit = (num, place) => {
    // using Math.abs so this works with negative numbers
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// figure out how many digits are in a number
const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// sort helper
const mostDigits = (arr) => {
    let maxDigits = 0;
    for (let i = 0; i < SVGAnimatedNumberList.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
};

const radixSort = (arr) => {
    let returnArr = [];
    let maxDigits = mostDigits(arr);
    for (let i = 0; i < maxDigits; i++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            digitBuckets[getDigit(arr[i], k)].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return returnArr;
}