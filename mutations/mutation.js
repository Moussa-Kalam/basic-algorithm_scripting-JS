function mutation(arr) {
    // Make the two strings in the array lowercase
    const arr2 = arr[1].toLowerCase();
    const arr1 = arr[0].toLowerCase();
    // Loop through out arr2 characters
    for (let i = 0; i < arr2.length; i++) {
        // If any of the characters is not found in arr1, return false
        if (arr1.indexOf(arr2[i]) < 0) return false;   
    }
    // If all of them are found in arr1, return true
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));
  console.log(mutation(["hello", "Hello"]));

