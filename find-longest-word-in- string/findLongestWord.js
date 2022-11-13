function findLongestWordLengthLength(str) {
    let longestWordLength = 0;
    // Turn the provided sentence into an array
    let splitStr = str.split(" ");
    /* For each element of the array, if the length of the element is greater than
       the initialized longestWordLength, then longest word equals the length of that element */

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > longestWordLength) {
            longestWordLength = splitStr[i].length;
        }
    }
    return longestWordLength;
    
  }
  
  console.log(findLongestWordLengthLength("My name is Moussa Kalam AMZAT"));