function frankenSplice(arr1, arr2, n) {
    // Create a copy of arr2
    let cpArr2 = arr2.slice();
    // Add the content of arr1 in the copy of arr2 at index n
    // The second argument of the splice method indicates that nothing is deleted for the copy arr2
    cpArr2.splice(n, 0, ...arr1);
    return cpArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

