// similar to bubble sort. instead of moving larger valuse into sorted position,  we  place 
// smaller ones into sorted positions

// still moving from beginning to end, slightly diff approach...

// generic swap function 
const swap = (arr, indexA, indexB) => {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}
const selectionSort = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        // create a var to store the smallest value
        let minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            // compare th  is item to the next uitem in array until you find a smaller number
            // if you find a small number while iterating, this is the "new" minimum 
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        // swap if new minimum is found at a diff index
        if (i !== minIndex) {
            swap(arr, i, minIndex)
        }
    }

    return arr;
}
//selectionSort([34,22,10,19,17])

// big O Not da best
// O(n^2)