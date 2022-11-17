function chunkArrayInGroups(arr, size) {
    // Create a new Array to store the smaller arrays
    const newArr = [];
    // Loop through the array, incrementing by size
    for (let i = 0; i < arr.length; i += size) {
        // Chunk the array at each loop and add it to newArr
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));