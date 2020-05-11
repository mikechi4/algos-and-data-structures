// ONLY WORKS ON SORTED ARRAY
// faster than linear search. saves time by dividing the array in half. check left side and right side, we can determine what we are looking for .


// create a function that accepts a sorted array and a value 
const binarySearch = (arr, val) => {
    // create left pointer at array start
    let start = 0
    // create right pointer at array end 
    let end = arr.length - 1;

    // find middle index;
    let middle = Math.floor((start + end) / 2);

    while (val !== arr[middle] && start < end) {
        if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2)
    }
    if (arr[middle] === val) {
        return middle
    } else {
        return - 1;
    }
}

//binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 1)
//              s            m           e
//                           s       m   e
//                                  