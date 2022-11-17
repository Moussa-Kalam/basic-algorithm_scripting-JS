function getIndexToIns(arr, num) {
    // Sort the array from lower to bigger
    arr.sort((a, b) => a - b);

    // Check for the first number that is bigger than num and return its index
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;

    }
    // If there no bigger number in the array, return the array length (last item's index + 1)
    return arr.length;
  }
  
  console.log(getIndexToIns([40, 60], 50));