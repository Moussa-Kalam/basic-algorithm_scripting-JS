function largestOfFour(arr) {
    // Array that will host the result of the 4 sub-arrays
    let arrLargestNumbers = [0, 0, 0, 0];
    // Iterate over the array
    for (let index = 0; index < arr.length; index++) {
        // Iterate over the subarrays
        for (let subIndex = 0; subIndex < arr[index].length; subIndex++) {
            if (arr[index][subIndex] > arrLargestNumbers[index]) {
                arrLargestNumbers[index] = arr[index][subIndex];
            }
        }

    }
    return arrLargestNumbers;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

