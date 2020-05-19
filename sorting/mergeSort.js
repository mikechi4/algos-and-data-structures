// a simple merge function that works on sorted arrays
const merge = (arr1, arr2) => {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[i]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }
    return mergedArr;
}
merge([1, 10, 50], [2, 14, 99, 100]);

//merge([1,10,50], [2,14,99,100])
//       _          _      [1]
//          -       -       [1, 2]
//          -         -     [1,2,10]

const mergeSort = (arr) => {
    // break up array into halves until you have arrays that are empty or have 1 element
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid))
    // merge those arrays with other sorted arrays until you are back at full length
    //return merged and sorted array
    return merge(left, right);
};

mergeSort([10, 25, 76, 73]);

// O(n log n ) -- pretty good m8
// O(n) space complexity
