// Sorting algo where the largest values "bubble" to the top 

// generic swap function 
const swap = (arr, indexA, indexB) => {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

const bubbleSort = (arr) => {
    // optimizing function here. if the array is already kinda sorted, this will prevent us from iterating through pieces that we know are already sorted
    let noSwaps = true;
    // loop w variablee i from end to beginning
    for (var i = arr.length; i > 0; i--) {
        // start w/ a nested loop from beginning to j - 1 
        for (var j = 0; j < i - 1; j++) {
            // if arr[j] > arr[j+1] swap!
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    // return sortd array
    return arr;
}

bubbleSort([37, 45, 29, 8]);

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

// big o? O(n)