function bouncer(arr) {
    // Create a new empty array
    let newArr = [];
    // Iterate over all elements of arr
    for (let i = 0; i < arr.length; i++) {
        // If the current element is truthy, add it to newArr
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    // Return the new array with the truthy values only
    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // No truthy value here