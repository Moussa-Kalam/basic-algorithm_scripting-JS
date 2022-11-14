function repeatStringNumTimes(str, num) {
    // Initialize an empty string
    let repeatedStr = "";
    // Evertyime num > 0; add str to repeatedStr
    while (num > 0) {
        repeatedStr += str;
        num--;
    }
    return repeatedStr;
}

console.log(repeatStringNumTimes("Hello", 3));