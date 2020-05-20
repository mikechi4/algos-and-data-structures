// similar to merge sort -- easiest to solve w/ recursion
// picks any element as a pivot point and moves any values less than it to the left (not really sorted)

// generic swap function 
const swap = (arr, indexA, indexB) => {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

// create a pivot function. going to set the pivot as the first index (it has it's drawbacks though)
const pivot = (arr, start = 0, end = arr.length + 1) => {
    let pivot = arr[start];
    let swapIndex = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, swapIndex, start);
    return swapIndex;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right); //3
        //left
        quicksort(arr, left, pivotIndex - 1);
        //right
        quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
}

quickSort([4, 6, 9, 1, 2, 5, 3])
