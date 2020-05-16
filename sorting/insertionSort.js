// similar to bubble and selection....

// generic swap function 
const swap = (arr, indexA, indexB) => {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

// builds up thee sort by gradually creating a larger left section which is always sorted
const insertionSort = (arr) => {
    // start by picking 2nd element in array. not 1st bc the 'sorteed' portion would be considered first index
    for (var i = 1; i < arr.length; i++) {
        var currVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currVal;
    }
    return arr;
}

// compare 2nd elemeent w/ first. swap if necessary

// continue to next element. if it's incorrect order, iterate through sorted portion to find where it should go

// repeat until entire array is sorted

insertionSort([2, 1, 9, 76, 4]);

// still O(n^2) quadratic. 
// if it's partially sortd it may be a little faster.

// it's good at sorting while data is comin in liv eor streaming.