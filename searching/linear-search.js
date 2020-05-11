// given an array and a value inside the array, return the values index
const linearSearch = (arr, val) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }

    return -1;
}


// iterate through each item in list until we find val. 
// time complexity: (O)n . as n grows(array gets longer), so does time. therefore its linear. duhhhhh
// this is the best we can do w/ UNSORTED data 
